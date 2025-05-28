import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const create = async (token, contactId, request) => {
    try {
        const response = await axios.post(`${API_URL}/contacts/${contactId}/addresses`, request, {
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

export const update = async (token, contactId, addressId, request) => {
    try {
        const response = await axios.put(`${API_URL}/contacts/${contactId}/addresses/${addressId}`, request, {
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

export const list = async (token, contactId) => {
    try {
        const response = await axios.get(`${API_URL}/contacts/${contactId}/addresses`, {
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

export const detail = async (token, contactId, addressId) => {
    try {
        const response = await axios.get(`${API_URL}/contacts/${contactId}/addresses/${addressId}`, {
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

export const deleteAddress = async (token, contactId, addressId) => {
    try {
        const response = await axios.delete(`${API_URL}/contacts/${contactId}/addresses/${addressId}`, {
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