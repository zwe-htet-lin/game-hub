import { useEffect, useState } from "react"
import apiClient from "@/services/apiClient";
import { CanceledError } from "axios";

interface DataResponse<T> {
  count: number;
  results: T[]
}

const useData = <T>(endpoint: string) => {
  const [ data, setData ] = useState<T[]>([]);
  const [ error, setError ] = useState('');
  const [ isLoading, setLoading ] = useState(true);

  useEffect(() => {
    const controller = new AbortController;

    apiClient.get<DataResponse<T>>(endpoint, { signal: controller.signal })
    .then(res => setData(res.data.results))
    .catch(err => {
      if(err instanceof CanceledError) return;
      setError(err.message);
    })
    .finally(() => setLoading(false));

    return () => controller.abort();
  }, [])

  return { data, error, isLoading };
}

export default useData;