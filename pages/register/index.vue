<template>
  <div>
    <div class="bg-white border rounded-xl p-4 sm:p-5 md:p-6 lg:p-8">
      <!-- REGISTER TITLE -->
      <div class="mb-5 py-3 md:py-0">
        <h1
          class="text-center text-xl font-black text-[30px] md:text-[40px] mb-5"
        >
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
              id="username"
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
              id="email"
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
              id="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Password"
              v-model="infor.password"
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
              id="confirmPassword"
              :type="showConfirmPassword ? 'text' : 'password'"
              placeholder="Confirm Password"
              class="w-full px-3 py-2"
            />
            <button @click="toggleConfirmPassword">
              <span v-if="showConfirmPassword" class="material-icons w-full">
                visibility
              </span>
              <span v-else class="material-icons w-full"> visibility_off </span>
            </button>
          </div>
        </div>
        <!-- CHECKBOX -->
        <div class="flex items-center mt-4">
          <input
            id="gettingNewsCheckbox"
            type="checkbox"
            value=""
            class="
              w-4
              h-4
              text-blue-600
              bg-gray-100
              rounded
              border-gray-300
              focus:ring-blue-500
              dark:focus:ring-blue-600 dark:ring-offset-gray-800
              focus:ring-2
              dark:bg-gray-700 dark:border-gray-600
            "
          />
          <label
            for="gettingNewsCheckbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Get latest news from Deverhub Blog</label
          >
        </div>
        <!-- BUTTON CONTINUE -->
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
      <span class="text-center my-6 block"
        >Have an account?
        <Nuxt-link to="/login" class="text-[#1d4ed8] font-light"
          >Login</Nuxt-link
        ></span
      >
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
    const showConfirmPassword = ref(false);
    const togglePassword = () => {
      showPassword.value = !showPassword.value;
      console.log(showPassword.value);
    };
    const toggleConfirmPassword = () => {
      showConfirmPassword.value = !showConfirmPassword.value;
      console.log(showConfirmPassword.value);
    };

    // const submit = async () => {
    //   await fetch("http://localhost:8000/api/register", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       username: username,
    //       email: email,
    //       password: password,
    //     }),
    //   });
    //   await $router.push("/login");
    // };

    return {
      showPassword,
      showConfirmPassword,
      togglePassword,
      toggleConfirmPassword,
      infor,
      // submit,
    };
  },
};
</script>
