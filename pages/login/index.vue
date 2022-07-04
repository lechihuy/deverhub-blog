<template>
  <div class="bg-white border rounded-xl px-8 pb-2 pt-8">
    <div class="mb-5">
      <h1 class="text-center text-xl font-black text-[40px] mb-5">Login</h1>
      <p class="text-center text-subText">Input your email to login account.</p>
    </div>
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
        <div class="border rounded flex items-center pr-3">
          <input
            name="password"
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            class="w-full px-3 py-2"
          />
          <button @click="togglePassword">
            <span v-if="showPassword" class="material-icons w-full">
              visibility
            </span>
            <span v-else class="material-icons w-full"> visibility_off </span>
          </button>
        </div>
      </div>
      <div>
        <input name="remember_me" type="checkbox" />
        <label for="remember_me">Remember me</label>
      </div>
      <div class="mt-5">
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
      class="text-[#1d4ed8] font-light text-center my-6 block"
      >I forgot my password</Nuxt-link
    >
    <span class="text-center my-6 block"
      >Don't have an account?
      <Nuxt-link to="/register" class="text-[#1d4ed8] font-light"
        >Register</Nuxt-link
      ></span
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
    const showPassword = ref(false);
    const togglePassword = () => {
      showPassword.value = !showPassword.value;
      console.log(showPassword.value);
    };

    return { email, password, showPassword, togglePassword };
  },
};
</script>
