<template>
  <div class="bg-slate-100 rounded-xl w-[300px] mx-auto space-y-3 px-10 py-5">
    <h1 class="text-center text-xl font-bold">Login</h1>

    <form @submit.prevent>
      <div class="grid grid-cols-2">
        <label for="email" class="col-span-1">Email</label>
        <input
          name="email"
          type="text"
          v-model="email"
          class="col-span-1 border rounded px-3"
        />
      </div>
      <div class="grid grid-cols-2">
        <label for="password" class="col-span-1">Password</label>
        <input
          name="password"
          type="password"
          v-model="password"
          class="col-span-1 border rounded px-3"
        />
      </div>
    </form>
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
