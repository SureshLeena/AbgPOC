import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const generateResponse = async (queryData) => {
  try {
    const response = await api.post('/query', queryData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.detail || 'Failed to generate response');
  }
};

export const getResponses = async (limit = 10, offset = 0) => {
  try {
    const response = await api.get(`/responses?limit=${limit}&offset=${offset}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.detail || 'Failed to fetch responses');
  }
};

export const getResponseById = async (id) => {
  try {
    const response = await api.get(`/responses/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.detail || 'Failed to fetch response');
  }
};