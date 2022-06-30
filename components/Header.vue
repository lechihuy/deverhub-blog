<template>
  <div class="max-w-[626px] mx-auto">
    <!-- LOGO -->
    <div class="flex items-center justify-center">
      <div class="w-[43px] h-[43px]">
        <img
          src="~/assets/img/logo-none-bg.png"
          alt="logo-deverhub-blog"
          class="w-full h-full object-cover"
        />
      </div>
      <h1>DEVERHUB <span>BLOG</span></h1>
    </div>
    <!-- NAVIGATOR -->
    <div class="flex justify-between items-center text-[20px] font-bold">
      <Nuxt-link to="/home">Home</Nuxt-link>
      <Nuxt-link to="/contact">Technology</Nuxt-link>
      <Nuxt-link to="/programming">Programming</Nuxt-link>
      <Nuxt-link to="/tricks">Tricks</Nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

