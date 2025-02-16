import axios from "axios";
import { BASE_URL } from "../constants/api-url";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  };
  findOne = () => {
    return axiosInstance
      .get<T>(`${this.endpoint}`)
      .then((res) => res.data);
  };
  post = (data: Partial<T> | FormData) => {
   
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
  delete = () => {
    return axiosInstance.delete<T>(`${this.endpoint}`).then((res) => res.data);
  };

  patch = (data: Partial<T>) => {
    return axiosInstance
      .patch<T>(`${this.endpoint}`, data)
      .then((res) => res.data);
  };

  put = (id: number | string, data: T) => {
    return axiosInstance
      .put<T>(`${this.endpoint}/${id}`, data)
      .then((res) => res.data);
  };
}
export default APIClient;
