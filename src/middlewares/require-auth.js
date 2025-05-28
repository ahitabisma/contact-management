import { useAuthStore } from '../stores/auth';
import { useEffect } from 'react';
import { useNavigate } from "react-router";

export const RequireAuth = ({ children }) => {
    const { token, clearAuth } = useAuthStore();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const sessionData = localStorage.getItem('auth-storage');
            const tokenInStorage = sessionData && JSON.parse(sessionData)?.state?.token;

            if (!tokenInStorage || !token) {
                clearAuth();
                navigate('/login');
                // return;
            }
        };

        fetchUser();
    }, [clearAuth, navigate]);

    if (!token) return null;

    return children;
};
