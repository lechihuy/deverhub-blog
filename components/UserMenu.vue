<template>
  <div
    class="
      w-[200px]
      top-15
      right-0
      border
      rounded-lg
      absolute
      z-10
      bg-white
      shadow-xl
    "
    :class="showUserMenu ? 'block' : 'hidden'"
  >
    <div class="flex flex-col py-3 px-2">
      <div class="border-b p-2">
        <p>Son Bill</p>
      </div>
      <Nuxt-link
        to="/profile"
        class="hover:bg-[#f0f9ff] hover:text-[#60a5fa] mt-2 p-2 rounded-md"
        >Profile</Nuxt-link
      >
      <Nuxt-link
        to="/logout"
        class="hover:bg-[#f0f9ff] hover:text-[#60a5fa] p-2 rounded-md"
        >Logout</Nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["showUserMenu"],
};
</script>
