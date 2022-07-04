<template>
  <div class="max-w-[626px] mx-auto">
    <div>
      <a href="/home" class="flex items-center justify-center">
        <div class="w-[43px] h-[43px]">
          <img
            src="~/assets/img/logo-none-bg.png"
            alt="logo-deverhub-blog"
            class="w-full h-full object-cover"
          />
        </div>
        <h1>DEVERHUB <span>BLOG</span></h1>
      </a>
    </div>
    <!-- NAVIGATOR -->
    <div class="flex justify-between items-center my-5 text-[16px] font-bold">
      <!-- NAVI LEFT PC-->
      <div class="space-x-4 hidden md:block text-subText">
        <Nuxt-link to="/home" class="hover:text-black">Home</Nuxt-link>
        <Nuxt-link to="/contact" class="hover:text-black">Technology</Nuxt-link>
        <Nuxt-link to="/programming" class="hover:text-black"
          >Programming</Nuxt-link
        >
        <Nuxt-link to="/tricks" class="hover:text-black">Tricks</Nuxt-link>
      </div>
      <!-- NAVI LEFT MOBILE -->
      <!-- NAVI LEFT MOBILE MENU BUTTON -->
      <div class="md:hidden block">
        <button @click="toggleShowNavbar">
          <span class="material-icons"> menu </span>
        </button>
      </div>
      <!-- NAVI RIGHT -->
      <div>
        <!-- AUTHENTICATED -->
        <div class="flex items-center" v-if="isLoggedIn">
          <!-- NOTIFICATION -->
          <div class="relative">
            <button @click="toggleNotificate">
              <span class="material-icons"> notifications </span>
            </button>
            <!-- <div :class="showNotificate ? 'block' : 'hidden'"> -->
            <NotificateMenu :showNotificate="showNotificate" />
            <!-- </div> -->
          </div>
          <!-- AVATAR -->
          <div class="relative">
            <div class="py-3 px-4 flex items-center">
              <div class="w-[32px] mr-3" @click="toggleUserMenu">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                  class="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <UserMenu :showUserMenu="showUserMenu" />
          </div>
        </div>
        <!-- NOT AUTHENTICATE -->
        <div class="flex items-center" v-else>
          <!-- LOGIN -->
          <div>
            <Nuxt-link
              to="/login"
              class="
                px-3
                py-2
                text-subText
                hover:underline hover:text-black
                active:text-buttonActive
              "
            >
              Log in
            </Nuxt-link>
          </div>
          <!-- CREATE ACCOUNT -->
          <div>
            <Nuxt-link
              to="/register"
              class="
                px-3
                py-2
                bg-white
                border border-button
                hover:bg-buttonHover hover:text-white
                active:bg-buttonActive
                text-button
                rounded-lg
              "
              >Create account</Nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
    <!-- MOBILE MENU NAVBAR -->
    <div>
      <div
        class="flex flex-col space-y-3 justify-between text-subText"
        :class="showNavbar ? 'block' : 'hidden'"
      >
        <Nuxt-link to="/home" class="px-1">Home</Nuxt-link>
        <Nuxt-link to="/contact" class="px-1">Technology</Nuxt-link>
        <Nuxt-link to="/programming" class="px-1">Programming</Nuxt-link>
        <Nuxt-link to="/tricks" class="px-1">Tricks</Nuxt-link>
      </div>
    </div>
    <!-- SEARCHING BAR -->
    <div>
      <SearchingBar />
    </div>
    <div></div>
  </div>
</template>

<script>
import { ref, useRoute, watch } from "@nuxtjs/composition-api";

export default {
  setup() {
    const isLoggedIn = true;
    const showNavbar = ref(false);
    const showNotificate = ref(false);
    const showUserMenu = ref(true);
    const route = useRoute();

    watch(route, () => {
      if (route == route.fullPath) {
        showNavbar.value = false;
      } else {
        showNavbar.value = false;
      }
    });

    const toggleShowNavbar = () => {
      showNavbar.value = !showNavbar.value;
    };

    const toggleNotificate = () => {
      showNotificate.value = !showNotificate.value;
    };
    const toggleUserMenu = () => {
      showNotificate.value = !showNotificate.value;
    };
    return {
      showNavbar,
      toggleShowNavbar,
      isLoggedIn,
      toggleNotificate,
      showNotificate,
      toggleUserMenu,
      showUserMenu,
    };
  },
};
</script>
<style>
a.nuxt-link-exact-active {
  background-color: #2563eb;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
}
a.nuxt-link-exact-active:hover {
  color: white;
  background-color: #1d4ed8;
}
</style>

