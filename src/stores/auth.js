import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
    persist(
        (set) => ({
            token: null,
            user: null,

            setAuth: (token, user) => {
                set({
                    token,
                    user,
                });
            },

            clearAuth: () => {
                set({
                    token: null,
                    user: null,
                });
            },
        }),
        {
            name: 'auth-storage', // unique name for the storage
            getStorage: () => sessionStorage, // use sessionStorage as the storage
        }
    )
)