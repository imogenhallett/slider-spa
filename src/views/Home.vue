<template>
  <div>
    <app-slides></app-slides>
  </div>
</template>

<script>
import Slides from '../components/Slides.vue';

export default {
  name: 'home',
  components: {
    'app-slides': Slides,
  },
};
</script>
