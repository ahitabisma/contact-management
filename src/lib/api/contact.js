import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const login = async (request) => {
    try {
        const response = await axios.post(`${API_URL}/users/login`, request);

        return response;
    } catch (error) {
        throw error;
    }
};

export const register = async (request) => {
    try {
        const response = await axios.post(`${API_URL}/users`, request);

        return response;
    } catch (error) {
        throw error;
    }
};