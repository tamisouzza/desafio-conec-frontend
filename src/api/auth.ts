import api from './axios';

export interface LoginResponse {
  access_token: string;
}

export const login = (email: string, password: string) => {
  return api.post<LoginResponse>('/auth/login', { email, password });
};

export const getProfile = (token: string) => {
  return api.get('/auth/profile', {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const register = (name: string, email: string, password: string) => {
  return api.post('/auth/register', { name, email, password });
};
