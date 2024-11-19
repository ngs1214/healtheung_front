import Cookies from 'js-cookie';
import axios, { AxiosResponse } from 'axios';

const apiUrl = "http://localhost:8080";
interface LoginInfo {
    userId: string;
    password: string;

}
axios.defaults.withCredentials = true;

export const AuthService = {
    login: async (loginInfo: LoginInfo): Promise<AxiosResponse<any>> => {
        const response = axios.post(`${apiUrl}/login`, loginInfo);
        return response;
    },
  
    logout: async (): Promise<AxiosResponse<any>> => {
    
      
      return axios.post(`${apiUrl}/logout`);
    },

    join:async (data:any) => {
        const response = axios.post(`${apiUrl}/join`,data)
        return response;  
    },

    refresh: async (): Promise<AxiosResponse<any>> => {
        // const refreshToken =  Cookies.get('refresh');
        // const headers = { 'refresh': refreshToken };
    //   return axios.post(`${apiUrl}/refresh`, {}, { headers });
      return axios.post(`${apiUrl}/refresh`);
    },
  
  };