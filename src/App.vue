<template>
  <div>
    <BaseLayout />
  </div>
</template>

<script>
import BaseLayout from "../src/components/layout/BaseLayout.vue";
import { useMusicStore } from "../src/components/stores/musicStore";
export default {
  setup() {
   const music= useMusicStore();
   music.setSongs();
   return{
  music,
};
  },

  components: {
    BaseLayout,
  },
};
</script>
<style>
@import "@/assets/style.css";
</style>
