<template>
  <div id="app">
    <app-nav-primary></app-nav-primary>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>

<script>
import PrimaryNav from './components/navigation/PrimaryNav.vue';

export default {
  components: {
    'app-nav-primary': PrimaryNav,
  },
};
</script>
