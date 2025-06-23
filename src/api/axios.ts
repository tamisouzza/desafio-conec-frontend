import axios from 'axios';

const api = axios.create({
  baseURL: 'https://desafio-conec-backend.onrender.com', 
});

export default api;