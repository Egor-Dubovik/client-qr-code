export const BASE_URL = 'http://localhost:5000';
export const API_URL = `${BASE_URL}/qr`;

export const API = {
  users: '/user',
  registration: '/user/registration',
  login: '/user/login',
  logout: '/user/logout',
  activate: '/user/activate/:link',
  refresh: '/token/refresh',
  profile: '/profile',
  returns: '/profile/returns',
  shop: '/shop',
};

export const METHODS = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  patch: 'PATCH',
  delete: 'DELETE',
};

export const HEADERS = {
  accept: 'application/json',
  contentType: 'application/json',
  authorization: (token: string): string => `Bearer ${token}`,
};
