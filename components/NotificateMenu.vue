<template>
  <div
    class="w-[300px] top-10 border rounded-lg absolute z-10 bg-white"
    :class="showNotificate ? 'block' : 'hidden'"
  >
    <!-- NOTI - 1 -->
    <Nuxt-link to="#">
      <div
        class="
          flex
          items-center
          py-3
          px-5
          hover:bg-[#f0f9ff] hover:text-[#60a5fa]
          rounded-md
          space-x-3
        "
      >
        <div class="w-[40px] h-[40px]">
          <img
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="avatar"
            class="w-full h-full object-cover rounded-full"
          />
        </div>
        <div class="w-[80%]">
          <p class="font-thin text-[14px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, quo!
          </p>
        </div>
      </div>
    </Nuxt-link>
    <!-- NOTI - 2 -->
    <Nuxt-link to="#">
      <div
        class="
          flex
          items-center
          py-3
          px-5
          hover:bg-[#f0f9ff] hover:text-[#60a5fa]
          rounded-md
          space-x-3
        "
      >
        <div class="w-[40px] h-[40px]">
          <img
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="avatar"
            class="w-full h-full object-cover rounded-full"
          />
        </div>
        <div class="w-[80%]">
          <p class="font-thin text-[14px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, quo!
          </p>
        </div>
      </div>
    </Nuxt-link>
    <!-- NOTI - 3 -->
    <Nuxt-link to="#">
      <div
        class="
          flex
          items-center
          py-3
          px-5
          hover:bg-[#f0f9ff] hover:text-[#60a5fa]
          rounded-md
          space-x-3
        "
      >
        <div class="w-[40px] h-[40px]">
          <img
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="avatar"
            class="w-full h-full object-cover rounded-full"
          />
        </div>
        <div class="w-[80%]">
          <p class="font-thin text-[14px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, quo!
          </p>
        </div>
      </div>
    </Nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["showNotificate"],
};
</script>
