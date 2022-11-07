<template>
  <div class="container">
    <h1>This is home page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted } from "vue";

export default defineComponent({
  name: "home",
  layout: "home",
  components: {},
  setup() {
    const state = reactive({});

    onMounted(() => {});
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
h1 {
  font-size: px2rem(30);
}
</style>
