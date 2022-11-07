<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import {
  defineComponent,
  toRefs,
  reactive,
  onMounted,
  computed,
  ref,
} from "vue";

onMounted(() => {});
</script>

<style lang="scss" scoped></style>
