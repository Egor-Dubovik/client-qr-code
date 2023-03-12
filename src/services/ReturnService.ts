import { API } from 'common/constant/api';
import { Return } from 'common/models/Return';
import $api from '.';

const ReturnService = {
  async create(data: FormData): Promise<Return> {
    const response = await $api.post<Return>(API.returns, data);
    return response.data;
  },
  async getAll(id: number): Promise<Return[]> {
    const response = await $api.get<Return[]>(`${API.returns}/${id}`);
    return response.data;
  },
  async delete(id: number): Promise<number> {
    const { data } = await $api.delete<number>(API.returns, { params: { id } });
    return data;
  },
};

export default ReturnService;
