<template>
  <div class="grid grid-cols-1 items-center justify-center gap-5 px-5">
    <!-- POST -->
    <div class="border p-5 rounded-lg col-span-1 text-center">
      <h1>POSTS</h1>
      <div class="flex items-center justify-center text-[36px] space-x-3">
        <span class="material-icons"> edit </span>
        <p>5</p>
      </div>
    </div>
    <!-- CATEGORIES -->
    <div class="border p-5 rounded-lg col-span-1 text-center">
      <h1>CATEGORIES</h1>
      <div class="flex items-center justify-center text-[36px] space-x-3">
        <span class="material-icons"> category </span>
        <p>5</p>
      </div>
    </div>
    <!-- USERS -->
    <div class="border p-5 rounded-lg col-span-1 text-center">
      <h1>USERS</h1>
      <div class="flex items-center justify-center text-[36px] space-x-3">
        <span class="material-icons"> people </span>
        <p>5</p>
      </div>
    </div>
    <div>CURRENT DATE TIME: {{ dateTime }}</div>
  </div>
</template>

<script>
import { ref } from "@nuxtjs/composition-api";
export default {
  layout: "admin",
  setup() {
    let dateTime = ref(null);
    const currentDateTime = () => {
      const current = new Date();
      const date =
        current.getDate() +
        "-" +
        current.getMonth() +
        "-" +
        current.getFullYear();
      const time =
        current.getHours() +
        ":" +
        current.getMinutes() +
        ":" +
        current.getSeconds();
      dateTime = date + " " + time;
      return dateTime;
    };
    currentDateTime();
    return { dateTime };
  },
};
</script>