import axios from 'axios';

const API_BASE_URL = 'https://2a09-2402-800-629c-dd44-693f-d886-57a7-b9bb.ngrok-free.app'; 

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchExampleData = async () => {
  const response = await api.get('/example-endpoint');
  return response.data;
};