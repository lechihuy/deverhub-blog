<template>
  <div class="fixed h-full overflow-hidden">
    <div class="flex flex-col space-y-3 bg-black text-white">
      <div>
        <h1 class="text-xl font-bold">DEVERHUB</h1>
      </div>
      <Nuxt-link to="/dashboard">Dashboard</Nuxt-link>
      <Nuxt-link to="/dashboard">Categories</Nuxt-link>
      <Nuxt-link to="/dashboard">Posts</Nuxt-link>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <p>Username</p>
          <button>Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
