<template>
  <div class="space-y-5 mt-10">
    <div class="flex items-center justify-between">
      <DetailPostUser />
      <div class="hidden md:flex">
        <DetailPostFunctions />
      </div>
    </div>
    <div>
      <DetailPost />
    </div>
    <div class="border-t-[1px] border-subText">
      <DetailPostComments />
    </div>
  </div>
</template>

<script>
export default {
  layout: "detailPost",
};
</script>
