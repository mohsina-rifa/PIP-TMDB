import axios from 'axios';

const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

if (!BASE_URL) {
  throw new Error('VITE_TMDB_BASE_URL is not defined in .env');
}
if (!API_KEY) {
  console.warn('VITE_TMDB_API_KEY is not defined. Requests will likely fail.');
}

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err?.response ?? { status: 0, data: { status_message: err.message } });
  }
);

export default api;