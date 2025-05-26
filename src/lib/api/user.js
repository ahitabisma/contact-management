import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const register = async (request) => {
    try {
        const response = await axios.post(`${API_URL}/users`, request);

        return response;
    } catch (error) {
        throw error;
    }
};

export const login = async (request) => {
    try {
        const response = await axios.post(`${API_URL}/users/login`, request);

        return response;
    } catch (error) {
        throw error;
    }
};

export const getUser = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/users/current`, {
            headers: {
                Accept: 'application/json',
                Authorization: token
            }
        });

        return response;
    } catch (error) {
        throw error;
    }
}

export const updateProfile = async (token, request) => {
    try {
        const response = await axios.patch(`${API_URL}/users/current`, request, {
            headers: {
                "Content-Type": 'application/json',
                Accept: 'application/json',
                Authorization: token
            }
        });

        return response;
    } catch (error) {
        throw error;
    }
};

export const updatePassword = async (token, request) => {
    try {
        const response = await axios.patch(`${API_URL}/users/current`, request, {
            headers: {
                "Content-Type": 'application/json',
                Accept: 'application/json',
                Authorization: token
            }
        });

        return response;
    } catch (error) {
        throw error;
    }
};

export const logout = async (token) => {
    try {
        const response = await axios.delete(`${API_URL}/users/logout`, {
            headers: {
                Authorization: token
            }
        });

        return response;
    } catch (error) {
        throw error;
    }
};