import { defineStore } from 'pinia';
import { login } from '../services/auth';
import router from '../router';
export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: JSON.parse(localStorage.getItem('user') || '{}'),
        returnUrl: null
    }),
    actions: {
        async login(email: string, password: string) {
            const user = await login(email, password);

            // update pinia state
            this.user = user.token;

            // store user details and jwt in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user.token));

            // redirect to previous url or default to home page
            router.push(this.returnUrl || '/');
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push('/login');
        }
    }
});