<template>
  <form>
    <div class="pt-2 relative mx-auto text-gray-600">
      <input
        class="
          border-2 border-gray-300
          bg-white
          h-10
          px-5
          pr-16
          rounded-lg
          text-sm
          focus:outline-none
          w-full
        "
        type="search"
        name="search"
        placeholder="Search"
      />
      <button type="submit" class="absolute right-0 top-0 mt-4 mr-4">
        <span class="material-icons text-center"> search </span>
      </button>
    </div>
  </form>
</template>

<script>
export default {};
</script>

