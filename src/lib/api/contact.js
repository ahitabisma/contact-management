import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const create = async (token, request) => {
    try {
        const response = await axios.post(`${API_URL}/contacts`, request, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: token,
            }
        });

        return response;
    } catch (error) {
        throw error;
    }
};

export const list = async (token, request) => {
    try {
        const url = new URL(`${API_URL}/contacts`);

        if (request.name) url.searchParams.append('name', request.name);
        if (request.phone) url.searchParams.append('phone', request.phone);
        if (request.email) url.searchParams.append('email', request.email);
        if (request.page) url.searchParams.append('page', request.page);

        const response = await axios.get(url.toString(), {
            headers: {
                Accept: 'application/json',
                Authorization: token,
            }
        });

        return response;
    } catch (error) {
        throw error;
    }
}

export const deleteContact = async (token, id) => {
    try {
        const response = await axios.delete(`${API_URL}/contacts/${id}`, {
            headers: {
                Accept: 'application/json',
                Authorization: token,
            }
        });

        return response;
    } catch (error) {
        throw error;
    }
}

export const detail = async (token, id) => {
    try {
        const response = await axios.get(`${API_URL}/contacts/${id}`, {
            headers: {
                Accept: 'application/json',
                Authorization: token,
            }
        });

        return response;
    } catch (error) {
        throw error;
    }
}

export const update = async (token, id, request) => {
    try {
        const response = await axios.put(`${API_URL}/contacts/${id}`, request, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: token,
            }
        });

        return response;
    } catch (error) {
        throw error;
    }
}