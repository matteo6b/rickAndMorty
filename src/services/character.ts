import axios from 'axios';
import { API_URL } from '../config';


export const getCharacters = async (page: number) => {
    const response = await axios.get(`${API_URL}/characters?page=${page}`);
    return response.data;
};


export const getCharacterFavorites = async () => {
    const response = await axios.get(`${API_URL}/favs`);
    return response.data;
};


export const addFavorite = async (id: number) => {
    const response = await axios.post(`${API_URL}/favs`, { id });
    return response.data.data;
};


export const deleteFavorite = async (id: number) => {
    const response = await axios.delete(`${API_URL}/favs`, { data: { id } });
    return response.data.data;
};



