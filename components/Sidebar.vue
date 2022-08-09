<template>
  <div class="fixed h-full bg-black text-white p-10 overflow-hidden w-[200px]">
    <div class="flex h-full flex-col justify-between">
      <div class="flex flex-col">
        <div>
          <h1 class="text-xl font-bold">DEVERHUB</h1>
        </div>
        <div class="flex flex-col space-y-3 mt-5">
          <Nuxt-link to="/admin/dashboard">Dashboard</Nuxt-link>
          <Nuxt-link to="/admin/categories">Categories</Nuxt-link>
          <Nuxt-link to="/admin/posts">Posts</Nuxt-link>
          <Nuxt-link to="/admin/users">Users</Nuxt-link>
        </div>
      </div>
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
