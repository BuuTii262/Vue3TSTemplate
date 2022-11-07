<template>
  <div class="home">
    <h1>This is home page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted } from "vue";
import { useStore } from "vuex";
import { User } from "./../../types/index";

export default defineComponent({
  name: "home",
  layout: "home",
  components: {},
  setup() {
    const store = useStore();
    const state = reactive({});
    const init = () => {
      let user: User = {
        name: "Mg Mga",
        token: "IamTokey",
        age: 19,
      };
      store.commit("SET_USER", user);
    };

    onMounted(() => {
      init();
    });
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
