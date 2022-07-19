<template>
  <div class="flex space-x-10">
    <div class="flex space-x-3 items-center">
      <!-- USER FUNCTION -->
      <div class="w-[40px] h-[40px]">
        <Nuxt-link to="/profile">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            alt=""
            class="w-full h-full object-cover rounded-full"
          />
        </Nuxt-link>
      </div>
      <div>
        <p class="text-[14px] text-subText">Author</p>
        <Nuxt-link to="/profile" class="text-[14px]">Son Bill</Nuxt-link>
      </div>
    </div>
    <!-- DATE -->
    <div class="">
      <p class="text-subText text-[14px]">July 19 (5 hours)</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>
