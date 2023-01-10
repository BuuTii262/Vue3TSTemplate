<template>
  <div class="home">
    <h1>This is home page</h1>
    <!-- <button class="btn" @click="openFb">clickme</button> -->
    <p>
      {{ bannerLists }}
    </p>
  </div>
</template>

<script lang="ts">
import { stat } from "fs";
import { defineComponent, toRefs, reactive, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { User } from "./../../types/index";

export default defineComponent({
  name: "home",
  layout: "home",
  components: {},
  setup() {
    const store = useStore();

    const state = reactive({
      bannerLists: <any>[],
    });
    const init = (): void => {
      let user: User = {
        name: "Mg Mga",
        token: "IamTokey",
        age: 19,
      };
      store.commit("SET_USER", user);

      let userForm = store.state.user.user;
      console.log(userForm);
    };

    onMounted(() => {
      init();

      store.dispatch("getBannerList", {}).then((res) => {
        state.bannerLists = res;
      });
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
    background: blue;
    width: 100%;
  }
  .btn {
    background: red;
  }
}
</style>
