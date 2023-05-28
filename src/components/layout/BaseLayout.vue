<template>
  <div class="main-wrapper">
    <BaseHeader />
    <BaseMain />
    <BaseFooter />
  </div>
</template>
<script>
import BaseHeader from "@/components/layout/BaseHeader";
import BaseMain from "@/components/layout/BaseMain";
import BaseFooter from "@/components/layout/BaseFooter";
export default {
  name: "BaseLayout",
  setup() {},
  components: {
    BaseMain,
    BaseFooter,
    BaseHeader,
  },
};
</script>
