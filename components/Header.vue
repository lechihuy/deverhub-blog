<template>
  <div class="max-w-[626px] mx-auto">
    <div>
      <a href="/" class="flex items-center justify-center">
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
      <div class="hidden md:block text-subText">
        <NavbarLinks />
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
            <button @click="toggleNotificate" class="pr-3">
              <span class="material-icons"> notifications </span>
            </button>
            <!-- <div :class="showNotificate ? 'block' : 'hidden'"> -->
            <NotificateMenu :showNotificate="showNotificate" />
            <!-- </div> -->
          </div>
          <!-- AVATAR -->
          <div class="relative">
            <div class="py-3 pl-4 flex items-center">
              <button class="w-[32px]" @click="toggleUserMenu">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                  class="w-full h-full object-cover rounded-full"
                />
              </button>
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
      <div class="text-subText" :class="showNavbar ? 'block' : 'hidden'">
        <NavbarLinks />
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
    const showUserMenu = ref(false);
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
      showUserMenu.value = !showUserMenu.value;
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

