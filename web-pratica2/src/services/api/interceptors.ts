import { toast } from 'react-toastify';
import { axiosInstance } from './axiosInstance';

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors globally
    toast.error("Ocorreu um erro inesperado. Nossa equipe já está trabalhando para resolver a questão.")
    console.error('API call error:', error);
    return Promise.reject(error);
  }
);
