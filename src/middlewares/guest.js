import { useAuthStore } from '../stores/auth';
import { useEffect } from 'react';
import { useNavigate } from "react-router";

export const Guest = ({ children }) => {
    const { token } = useAuthStore();
    const navigate = useNavigate();

    useEffect(() => {
        const sessionData = sessionStorage.getItem('auth-storage');
        const tokenInStorage = sessionData && JSON.parse(sessionData)?.state?.token;

        if (tokenInStorage || token) {
            navigate('/dashboard/contacts');
        }

    }, [token, navigate]);

    if (token) return null;

    return children;
};
