# card of data detail of rickandmortyapi with vuetify
<script lang="ts" setup>
import Character from "../../components/Character.vue";
import { useCharacterStore } from "../../stores";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;

const characterStore = useCharacterStore();
const getItem = (id: number) => {
  characterStore.getCharacter(id);
};

const addOrDeleteFavorite = (n: any) => {
  n.favorite
    ? characterStore.deleteFavorite(n.id)
    : characterStore.addFavorite(n.id);
};

getItem(Number(id));
</script>
<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <v-card>
          <v-toolbar color="primary" dark flat>
            <v-btn @click="$router.back" icon="mdi-arrow-left"></v-btn>
            <v-toolbar-title
              >Detalle de {{ characterStore.character.name }}
            </v-toolbar-title>
          </v-toolbar>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <Character
          :detail="true"
          :character="characterStore.character"
          @favorite="addOrDeleteFavorite"
        >
        </Character>
      </v-col>
    </v-row>
  </v-container>
</template>
