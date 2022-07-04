<template>
  <div
    class="w-[300px] top-10 border rounded-lg absolute z-10 bg-slate-500"
    :class="showUserMenu ? 'block' : 'hidden'"
  >
    <div class="flex flex-col items-center py-3 px-5">
      <div>
        <p>Son Bill</p>
      </div>
      <div class="flex flex-col">
        <Nuxt-link to="/profile">Profile</Nuxt-link>
        <Nuxt-link to="/logout">Logout</Nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["showUserMenu"],
};
</script>
