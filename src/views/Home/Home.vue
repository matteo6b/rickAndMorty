# list of all data with button favorites
<script lang="ts" setup>
import Character from "../../components/Character.vue";

import { useCharacterStore } from "../../stores";

const characterStore = useCharacterStore();
const getItems = async (page: number) => {
  await characterStore.getCharacters(page);
};

getItems(1);
</script>
<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <v-card class="mx-auto" max-width="500">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Rick & Morty Application</v-toolbar-title>
          </v-toolbar>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="!characterStore.loading">
      <v-col cols="4" v-for="item in characterStore.characters" :key="item.id">
        <Character :character="item" :detail="false"></Character>
      </v-col>
    </v-row>
    <div v-else class="text-center pt-3">
      <v-progress-circular
        :size="100"
        :width="7"
        color="purple"
        indeterminate
      ></v-progress-circular>
    </div>
  </v-container>
</template>
