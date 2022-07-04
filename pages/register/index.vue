<template>
  <div class="">
    <div class="bg-white border rounded-xl p-8">
      <div class="mb-5">
        <h1 class="text-center text-xl font-black text-[40px] mb-5">
          REGISTER
        </h1>
        <p class="text-center text-subText">
          Input your email and password to create account.
        </p>
      </div>
      <form @submit.prevent>
        <!-- USERNAME INPUT -->
        <div class="flex flex-col mb-3">
          <label for="username" class="mb-1">Username</label>
          <div>
            <input
              name="username"
              type="text"
              v-model="infor.username"
              class="border rounded px-3 py-2 w-full"
              placeholder="Username"
            />
          </div>
        </div>
        <!-- EMAIL INPUT -->
        <div class="flex flex-col mb-3">
          <label for="email" class="mb-1">Email</label>
          <div>
            <input
              name="email"
              type="text"
              v-model="infor.email"
              class="border rounded px-3 py-2 w-full"
              placeholder="Email"
            />
          </div>
        </div>
        <!-- PASSWORD -->
        <div class="flex flex-col mb-3">
          <label for="password" class="mb-1">Password</label>
          <div class="border rounded flex items-center pr-3">
            <input
              name="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Password"
              class="w-full px-3 py-2"
            />
            <button @click="togglePassword">
              <span v-if="showPassword" class="material-icons">
                visibility
              </span>
              <span v-else class="material-icons"> visibility_off </span>
            </button>
          </div>
        </div>
        <!-- CONFIRM PASSWORD -->
        <div class="flex flex-col mb-3">
          <label for="confirmPassword" class="mb-1">Confirm Password</label>
          <div class="border rounded flex items-center pr-3">
            <input
              name="confirmPassword"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Confirm Password"
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
        <!-- CHECKBOX -->
        <div>
          <input type="checkbox" id="gettingNewsCheckbox" />
          <label for="gettingNewsCheckbox"
            >Get the latest news from Deverhub Blog</label
          >
        </div>
        <div class="my-10">
          <input
            type="submit"
            value="Continue"
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
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@nuxtjs/composition-api";
export default {
  layout: "loginAndRegister",
  setup() {
    const infor = reactive({
      username: "",
      email: "",
      password: "",
    });
    const showPassword = ref(false);
    const togglePassword = () => {
      showPassword.value = !showPassword.value;
      console.log(showPassword.value);
    };

    return {
      showPassword,
      togglePassword,
      infor,
    };
  },
};
</script>
