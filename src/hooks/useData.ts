import { useEffect, useState } from "react"
import apiClient from "@/services/apiClient";
import { AxiosRequestConfig, CanceledError } from "axios";

interface DataResponse<T> {
  count: number;
  results: T[]
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [ data, setData ] = useState<T[]>([]);
  const [ error, setError ] = useState('');
  const [ isLoading, setLoading ] = useState(false);

  useEffect(() => {
    const controller = new AbortController;

    setLoading(true);
    apiClient.get<DataResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
    .then(res => {
      setData(res.data.results)
      setError(''); // set the error back to empty string if there was an error.
    })
    .catch(err => {
      if(err instanceof CanceledError) return;
      setError(err.message);
    })
    .finally(() => setLoading(false));

    return () => controller.abort();
  }, deps ? [...deps] : [])

  return { data, error, isLoading };
}

export default useData;