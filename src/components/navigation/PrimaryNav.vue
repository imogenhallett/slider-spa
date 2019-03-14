<template>
  <div class="container-fluid">
    <nav class="navbar fixed-top navbar-expand-lg primary-nav">
      <button class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item my-3 my-lg-0 mx-3"
            @click="jumpToSlide(1)"
            v-bind:class="{'active':(1 === getCurrentSlide)}"
          >
            Customer Problem
          </li>
          <li class="nav-item my-3 my-lg-0 mx-3"
            @click="jumpToSlide(2)"
            v-bind:class="{'active':(2 === getCurrentSlide)}"
          >
            Business Problem
          </li>
          <li class="nav-item my-3 my-lg-0 mx-3"
            @click="jumpToSlide(3)"
            v-bind:class="{'active':(3 === getCurrentSlide)}"
          >
            Recommendations
          </li>
          <li class="nav-item my-3 my-lg-0 mx-3"
            @click="jumpToSlide(4)"
            v-bind:class="{'active':(4 === getCurrentSlide)}"
          >
            Data Strategy
          </li>
          <li class="nav-item my-3 my-lg-0 mx-3"
            @click="jumpToSlide(5)"
            v-bind:class="{'active':(5 === getCurrentSlide)}"
          >
            Next Steps
          </li>
        </ul>
      </div>
    </nav>
  </div>
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
