<template>
  <div class="flex space-x-5">
    <!-- LIKE -->
    <div>
      <button @click="togglePostLike" v-if="postLike">
        <span class="material-icons"> favorite </span>
      </button>
      <button v-else @click="togglePostLike">
        <span class="material-icons"> favorite_border </span>
      </button>
    </div>
    <!-- SAVE -->
    <div>
      <button @click="togglePostSave" v-if="postSave">
        <span class="material-icons"> bookmark </span>
      </button>
      <button v-else @click="togglePostSave">
        <span class="material-icons"> bookmark_border </span>
      </button>
    </div>
    <!-- MORE -->
    <div class="relative">
      <button @click="toggleMoreOptions">
        <span class="material-icons"> more_vert </span>
      </button>
      <div
        class="
          w-[200px]
          top-15
          border
          rounded-lg
          absolute
          z-10
          bg-white
          shadow-xl
        "
        :class="showMoreOptions ? 'block' : 'hidden'"
      >
        <div class="p-3">
          <button @click="copyToClipBoard">Copy Link</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "@vue/composition-api";
import { useRoute, computed } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const postLike = ref(false);
    const postSave = ref(false);
    const showMoreOptions = ref(false);
    const route = useRoute();

    // LIKE FUNC
    const togglePostLike = () => {
      postLike.value = !postLike.value;
    };
    // SAVE FUNC
    const togglePostSave = () => {
      postSave.value = !postSave.value;
    };
    // MORE FUNC
    const toggleMoreOptions = () => {
      showMoreOptions.value = !showMoreOptions.value;
    };

    const routeName = computed(() => route.value.path);
    console.log(routeName);

    // $nuxt.$route.name

    const copyToClipBoard = () => {
      navigator.clipboard.writeText(routeName.value);
    };

    return {
      togglePostLike,
      postLike,
      postSave,
      togglePostSave,
      toggleMoreOptions,
      showMoreOptions,
      routeName,
      copyToClipBoard,
    };
  },
});
</script>
