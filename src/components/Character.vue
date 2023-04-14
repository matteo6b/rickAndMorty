<script lang="ts" setup>
import { defineProps } from "vue";
import Character from "../models/Character";
const props = defineProps<{
  character: Character;
  detail: boolean;
}>();
</script>

<template>
  <v-card
    class="my-12"
    :color="props.character.isFavorite ? '#F9A825' : '#000'"
    theme="dark"
    outlined
  >
    <v-img
      class="white--text align-center"
      :height="detail ? 600 : 400"
      cover
      :src="props.character.image"
    ></v-img>

    <v-card-item>
      <v-card-title>{{ props.character.name }}</v-card-title>
    </v-card-item>

    <v-card-text>
      <div class="my-4 text-subtitle-1">Origen:</div>

      <div>{{ props.character.origin.name }}</div>

      <div class="my-4 text-subtitle-1">Localización:</div>

      <div>{{ props.character.location.name }}</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>Caracteristicas:</v-card-title>

    <div class="px-4">
      <v-chip-group>
        <v-chip>{{ props.character.species }}</v-chip>

        <v-chip>{{ props.character.gender }}</v-chip>

        <v-chip>{{ props.character.species }}</v-chip>

        <v-chip>{{ props.character.status }}</v-chip>
      </v-chip-group>
    </div>

    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        variant="text"
        size="x-large"
        block
        rounded="xl"
        v-if="!props.detail"
        @click="
          $router.push({ name: 'detail', params: { id: props.character.id } })
        "
      >
        Ver detalle
      </v-btn>
      <v-btn
        v-else
        size="x-large"
        block
        rounded="xl"
        :color="props.character.isFavorite ? 'primary' : '	F0FFFF'"
        @click="
          $emit('favorite', {
            id: props.character.id,
            favorite: props.character.isFavorite,
          })
        "
      >
        favorito
        <v-icon>mdi-star</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
