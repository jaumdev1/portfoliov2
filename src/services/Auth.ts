import Cookies from 'js-cookie';
import axios, { AxiosResponse } from 'axios';
import { Navigate } from 'react-router-dom';

import config from "./config";

const validateToken = async (token: string): Promise<boolean> => {
  try {
    const response: AxiosResponse<any> = await axios.post(`${config.apiUrl}/auth/validate`, {
      token: token,
    });

    if (response.data.valid) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};


const IsAuthenticated = async (): Promise<boolean> => {
  const token = localStorage.getItem('token');

  if (!token) {
    return false; 
  }


  const isValidToken = await validateToken(token);

  return isValidToken;
};



const Auth = async (email: string, senha: string): Promise<void> => {
  try {
    const response: AxiosResponse<any> = await axios.post(`${config.apiUrl}/auth/login`, {
      email: email,
      senha: senha,
    });

    if (response.status === 200 && response.data && response.data.token) {
      // Armazene o token no localStorage
      localStorage.setItem('token', response.data.token);
    } else {
      throw new Error('Credenciais inválidas.');
    }
  } catch (error) {
    throw error;
  }
};


export { IsAuthenticated, Auth };