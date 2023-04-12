import axios from 'axios';
import { API_URL } from '../config';
export function jwtInterceptor() {
    axios.interceptors.request.use(config => {
        // add auth header with jwt if account is logged in and request is to the api url
        const loggedIn = localStorage.getItem('user');
   

        if (loggedIn) {
            config.headers['Authorization'] = `Bearer ${loggedIn.replace(/['"]+/g, '') }`;
        }

        return config;
    });
}