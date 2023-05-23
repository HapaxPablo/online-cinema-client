import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cinema-server-1p4o.onrender.com', // Укажите базовый URL вашего сервера API
});

export default api;