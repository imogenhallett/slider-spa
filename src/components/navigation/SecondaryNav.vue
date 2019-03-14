<template>
  <nav class="secondary-nav">
    <span
      v-for="i in getTotalSlides"
      :key="i"
      @click="jumpToSlide(i)"
      class="icon-radio-checked2"
      v-bind:class="{'active':(i === getCurrentSlide)}"
    ></span>
  </nav>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/navigation.scss";
</style>

<script>
import { mapGetters, mapActions } from 'vuex';
import navJumpToMixin from '../../mixins/navJumpTo';

export default {
  mixins: [navJumpToMixin],
  computed: {
    ...mapGetters([
      'getTotalSlides',
      'getPrevSlide',
      'getCurrentSlide',
      'getNextSlide',
    ]),
  },
  methods: {
    ...mapActions([
      'setTotalSlides',
      'setPrevSlide',
      'setCurrentSlide',
      'setNextSlide',
    ]),
  },
};
</script>
