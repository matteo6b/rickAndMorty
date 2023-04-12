import axios from 'axios';
import { API_URL } from '../config';


export const login = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
};
