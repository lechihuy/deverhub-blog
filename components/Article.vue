<template>
  <section class="rounded-lg mt-5">
    <!-- ARTICLE IMG -->
    <div class="h-[283px]">
      <Nuxt-link to="#">
        <img
          src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt=""
          class="rounded-t-lg w-full h-full object-cover"
        />
      </Nuxt-link>
    </div>
    <!-- ARTICLE CONTENT -->
    <div class="border rounded-b-lg p-5 h-full">
      <!-- CONTENT TAG -->
      <div class="underline text-subText font-extralight">
        <Nuxt-link to="#">REACTJS</Nuxt-link>
      </div>
      <!-- CONTENT TITLE -->
      <div>
        <Nuxt-link to="#">
          <h1 class="font-medium text-[28px] mb-[10px]">
            Xây dựng website bằng ReactJS
          </h1>
        </Nuxt-link>
      </div>
      <!-- RELATED TAGS -->
      <div class="flex space-x-5 mb-[25px]">
        <Nuxt-link to="#" class="hover:underline">
          <span>#</span>webdev</Nuxt-link
        >
        <Nuxt-link to="#" class="hover:underline">
          <span>#</span>tutorial</Nuxt-link
        >
        <Nuxt-link to="#" class="hover:underline">
          <span>#</span>reactjs</Nuxt-link
        >
      </div>
      <!-- DETAIL CONTENT USER -->
      <div class="flex justify-between text-subText font-extralight">
        <div class="flex space-x-5">
          <Nuxt-link to="#" class="hover:underline">Son Bill</Nuxt-link>
          <p>•</p>
          <p>1 giờ trước</p>
        </div>
        <div>
          <p>5 phút đọc</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

