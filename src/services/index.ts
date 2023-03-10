import axios from 'axios';
import { API, API_URL } from 'common/constant/api';
import { IAuthResponse } from 'common/interfaces/auth';

const $api = axios.create({
  withCredentials: true, // чтобы куки цеплялись автоматически к каждому запросу
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    //originalRequest - хранит все данные для запроса
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
      // _isRetry - сообщает конфигу, что запрос уже делали
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<IAuthResponse>(`${API_URL}${API.refresh}`, {
          withCredentials: true,
        });
        localStorage.setItem('token', response.data.accessToken);
        return $api.request(originalRequest);
      } catch (e) {
        console.log('НЕ АВТОРИЗОВАН');
      }
    }
    throw error;
  }
);

export default $api;
