<template>
  <div class="bg-white border rounded-xl h-[400px] px-8 pb-2 pt-8">
    <h1 class="text-center text-xl font-bold mb-2">
      Welcome to DEVERHUB - BLOG
    </h1>
    <form @submit.prevent>
      <div class="flex flex-col mb-3">
        <label for="email" class="mb-1">Email</label>
        <input
          name="email"
          type="text"
          v-model="email"
          class="border rounded px-3 py-2"
        />
      </div>
      <div class="flex flex-col mb-3">
        <label for="password" class="mb-1">Password</label>
        <input
          name="password"
          type="password"
          v-model="password"
          class="border rounded px-3 py-2"
        />
      </div>
      <div>
        <input name="remember_me" type="checkbox" />
        <label for="remember_me">Remember me</label>
      </div>
      <div class="mt-3">
        <input
          type="submit"
          value="Login"
          class="
            bg-button
            text-white
            w-full
            rounded
            py-2
            active:bg-buttonActive
            hover:bg-buttonHover
          "
        />
      </div>
    </form>
    <Nuxt-link
      to="/forgot-password"
      class="text-[#1d4ed8] font-light text-center mt-6 block"
      >I forgot my password</Nuxt-link
    >
  </div>
</template>

<script>
import { ref } from "@nuxtjs/composition-api";
export default {
  layout: "loginAndRegister",
  setup() {
    const email = ref("");
    const password = ref("");
    return { email, password };
  },
};
</script>
