<template>
  <router-view #="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script setup lang="ts"></script>
<style lang="scss">
@import "./styles/index.scss";
h1 {
  font-size: px2rem(25);
  font-family: DIN;
}
</style>
