<script lang="ts" setup>
import { useAuthStore } from "../../stores";
import { ref } from "vue";

const email = ref("");
const password = ref("");

const login = async () => {
  const authStore = useAuthStore();
  return await authStore.login(email.value, password.value);
};
</script>
<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="6">
        <v-card>
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form validate-on="submit" @submit.prevent="login()">
              <v-text-field
                v-model="email"
                name="email"
                label="email"
                type="text"
                placeholder="email"
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                name="password"
                label="Password"
                type="password"
                placeholder="password"
                required
              ></v-text-field>
              <v-btn type="submit" class="mt-4" color="primary" value="log in"
                >Login</v-btn
              >
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
