<template>
  <div
    class="
      flex
      lg:flex-row lg:space-y-0
      md:flex-row md:space-y-0
      sm:flex-col sm:space-y-3
      justify-between
      flex-col
      space-y-0
      lg:items-center
      md:items-center
      lg:space-x-5
      md:space-x-5
      space-x-0
    "
  >
    <Nuxt-link to="/" class="px-1">Home</Nuxt-link>
    <Nuxt-link to="/contact" class="px-1">Technology</Nuxt-link>
    <Nuxt-link to="/programming" class="px-1">Programming</Nuxt-link>
    <Nuxt-link to="/tricks" class="px-1">Tricks</Nuxt-link>
  </div>
</template>

<script>
export default {};
</script>
