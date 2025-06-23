import api from './axios';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt?: string;
  isActive?: boolean;
}

export const getUsers = (token: string) => {
  return api.get<User[]>('/users', { headers: { Authorization: `Bearer ${token}` } });
};

export const updateUser = (token: string, id: number, data: Partial<User>) => {
  return api.put(`/users/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });
};
