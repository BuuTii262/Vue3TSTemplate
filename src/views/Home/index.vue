<template>
  <div class="home">
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
.home {
  h1 {
    color: red;
    font-size: px2rem(30);
  }
}
</style>
