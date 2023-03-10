import axios from 'axios';
import { API, API_URL } from 'common/constant/api';
import { Return } from 'common/models/Return';
import $api from '.';

const ReturnService = {
  async create(data: FormData): Promise<Return> {
    console.log(data);
    const response = await $api.post<Return>(API.returns, data);
    return response.data;
  },
};

export default ReturnService;
