import axios, { AxiosRequestConfig } from "axios";

export interface ResponseData<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'e6233892f35646ba8d0cd5263a02dff0'
  }
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = (config: AxiosRequestConfig) => {
    return axiosInstance.get<ResponseData<T>>(this.endpoint, config).then(res => res.data)
  }
}

export default APIClient;