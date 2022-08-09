<template>
  <div class="w-full p-5">
    <div class="my-10">
      <h1 class="font-bold text-[30px]">POSTS</h1>
    </div>
    <div>
      <button class="bg-black hover:bg-gray-900 px-3 py-2 text-white mb-5">
        CREATE CATEGORY
      </button>
    </div>
    <table class="table-auto w-full p-5">
      <thead>
        <tr class="w-full border-b-[1px]">
          <th>ID</th>
          <th>CATEGORY</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center">
          <td class="p-5">1</td>
          <td class="p-5">Web Developer</td>
          <td>
            <div class="flex items-center space-x-3">
              <button class="flex items-center justify-center">
                <span class="material-icons"> mode_edit </span>
              </button>
              <button class="flex items-center justify-center">
                <span class="material-icons"> clear </span>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

    </div>
  </div>
</template>

<script>
import { reactive } from "@nuxtjs/composition-api";
export default {
  layout: "admin",
  setup() {
    const table = reactive(["ID", "CATEGORY"]);
    const data = reactive(["1", "Webdev"]);
    console.log(table);
    console.log(data);
    return { table, data };
  },
};
</script>

