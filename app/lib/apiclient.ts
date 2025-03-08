import axios from "axios";
import { BASE_URL } from "../constants/api-url";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
});


//  axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
      
//       config.headers.Authorization = `Bearer ${token}`;
//       console.log("Token envoyé dans la requête :", token);
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

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
 
   post =(data: Partial<T> | FormData) => {
    const token = localStorage.getItem("access_token");

    const config = {
      headers: {
        ...(data instanceof FormData
          ? { "Content-Type": "multipart/form-data" }
          : { "Content-Type": "application/json" }),
        Authorization: `Bearer ${token}`, 
      },
    };

        //const config = (data instanceof FormData ? { headers: { "Content-Type": "multipart/form-data" } } : { "Content-Type": "application/json" })
        return axiosInstance.post<T>(this.endpoint, data, config)
          .then((res) =>{
            console.log("Config headers envoyés :", config.headers); 
            console.log("Réponse du serveur :", res.data); // 
                return res.data;
          })
          .catch((error) => {
            console.log("Config headers envoyés :", config.headers); 
            console.log("Erreur lors de la requête POST :", error.response.data);
            throw error; 
          });
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
