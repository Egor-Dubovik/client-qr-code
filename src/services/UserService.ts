import axios from 'axios';
import { API, API_URL } from 'common/constant/api';
import { IAuthResponse, ILoginParams, IRegistrationParams } from 'common/interfaces/auth';
import $api from '.';

const UserService = {
  async registration(data: IRegistrationParams): Promise<IAuthResponse> {
    const response = await $api.post<IAuthResponse>(API.registration, data);
    return response.data;
  },

  async login(data: ILoginParams): Promise<IAuthResponse> {
    const response = await $api.post<IAuthResponse>(API.login, data);
    return response.data;
  },

  async logout() {
    const response = await $api.post<number>(API.logout);
    return response.data;
  },

  async checkAuth(): Promise<IAuthResponse> {
    const response = await axios.get<IAuthResponse>(`${API_URL}${API.refresh}`, {
      withCredentials: true, // куки автоматически
    });
    return response.data;
  },
};

export default UserService;
