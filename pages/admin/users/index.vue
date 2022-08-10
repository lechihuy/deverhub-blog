<template>
  <div class="w-full p-5">
    <div class="my-10">
      <h1 class="font-bold text-[30px]">USERS</h1>
    </div>
    <table class="table-auto w-full p-5">
      <thead>
        <tr class="w-full border-b-[1px]">
          <th>ID</th>
          <th>USERNAME</th>
          <th>ROLE</th>
          <th>DATE</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center">
          <td class="p-5">1</td>
          <td class="p-5">sonpewds</td>
          <td class="p-5">Admin</td>
          <td class="p-5">10-08-2022 - 20:13:14</td>
          <td>
            <div class="flex items-center space-x-3">
              <button>DETAIL</button>
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
export default {
  layout: "admin",
};
</script>

