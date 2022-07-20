<template>
  <div
    class="bg-white border rounded-xl px-4 sm:px-5 md:px-6 lg:px-8 pb-2 pt-8"
  >
    <!-- LOGIN TITLE -->
    <div class="mb-5">
      <h1
        class="text-center text-xl font-black text-[30px] md:text-[40px] mb-5"
      >
        Forgot Password
      </h1>
      <p class="text-center text-subText">Input your email.</p>
    </div>
    <form @submit.prevent>
      <div class="flex flex-col mb-3">
        <label for="email" class="mb-1">Email</label>
        <input
          id="email"
          type="text"
          v-model="forgotPasswordData.email"
          placeholder="Your email address"
          class="border rounded px-3 py-2"
        />
      </div>
      <!-- BUTTON SUBMIT -->
      <div class="mt-5">
        <input
          type="submit"
          value="Reset my password"
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
    <Nuxt-link to="/" class="text-[#1d4ed8] font-light text-center my-6 block"
      >Back to home page</Nuxt-link
    >
  </div>
</template>

<script>
import { reactive, ref } from "@nuxtjs/composition-api";

export default {
  layout: "loginAndRegister",

  setup() {
    const forgotPasswordData = reactive({
      email: "",
      password: "",
    });
    return { forgotPasswordData };
  },
};
</script>

