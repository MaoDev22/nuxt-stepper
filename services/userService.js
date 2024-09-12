import apiClient from '@utils/axios';

export const register = async (payload) => {
  try {
    const response = await apiClient.post('/users/register', payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};
