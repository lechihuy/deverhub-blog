<template>
  <div class="flex flex-col justify-center items-center min-h-screen h-full">
    <div class="mb-3">
      <h1 class="font-bold text-[30px]">CREATE CATEGORY</h1>
    </div>
    <form class="flex flex-col mb-3">
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter your category"
        class="p-3 border mb-5 w-[300px]"
      />
      <button
        type="submit"
        class="border py-2 px-3 hover:bg-black hover:text-white"
      >
        Submit
      </button>
    </form>
    <Nuxt-link to="#" class="hover:underline">Back</Nuxt-link>
  </div>
</template>

<script>
export default {
  layout: "admin",
};
</script>

