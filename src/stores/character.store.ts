import { defineStore } from 'pinia';

import { getCharacters, getCharacterFavorites, addFavorite, deleteFavorite } from '../services/character';
import Character from '../models/Character';
export const useCharacterStore = defineStore({
    id: 'character',
    state: () => ({
        characters: [] as Character[],
        charactersFavorites: [],
        character: {} as Character,
        page: 1,
        loading: false,

    }),
    actions: {
        async getCharacters(page: number) {

            this.loading = true;

            const characters = await getCharacters(page);
            const charactersFavorites = await getCharacterFavorites();
            this.charactersFavorites = charactersFavorites.data;

            this.characters = characters.data;
            this.page = characters.page;

            this.isFavorites();

            this.loading = false;





        },
        getCharacter(id: number) {
            this.character = this.characters.find((character: Character) => character.id === id) || {} as Character;
        },
        isFavorites() {
            this.characters = this.characters.map((character: Character) => {
                character.isFavorite = false;
                this.charactersFavorites.map((favorite: number) => {
                    if (character.id === favorite) {
                        character.isFavorite = true;
                    }
                });





                return character;
            });
        },
        async addFavorite(id: number) {
            this.charactersFavorites = await addFavorite(id);
            this.isFavorites();


        },
        async deleteFavorite(id: number) {
            this.charactersFavorites = await deleteFavorite(id);
            this.isFavorites();
        }

    }
});