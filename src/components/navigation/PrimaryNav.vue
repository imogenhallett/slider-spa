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
          <li class="nav-item my-3 my-lg-0 mx-3" @click="jumpToSlide(1)">
            Customer Problem
          </li>
          <li class="nav-item my-3 my-lg-0 mx-3" @click="jumpToSlide(1)">
            Business Problem
          </li>
          <li class="nav-item my-3 my-lg-0 mx-3" @click="jumpToSlide(1)">
            Recommendations
          </li>
          <li class="nav-item my-3 my-lg-0 mx-3" @click="jumpToSlide(1)">
            Data Stratagy
          </li>
          <li class="nav-item my-3 my-lg-0 mx-3" @click="jumpToSlide(1)">
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

export default {
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
    jumpToSlide(targetSlide) {
      if (targetSlide === this.getCurrentSlide) {
        return false;
      }
      const PARENTELEM = document.getElementById('slides-wrap');
      const DIRECTION = (targetSlide > this.getCurrentSlide) ? 'next' : 'prev';
      const ELEMNAV = document.getElementById('navbarNavDropdown');
      const ELEMANIMATE = document.getElementById(`slide-${targetSlide}`);
      let prevSlide = targetSlide;
      prevSlide -= 1;
      let nextSlide = targetSlide;
      nextSlide += 1;
      ELEMNAV.classList.remove('show');
      ELEMANIMATE.classList.remove('hide-slide');
      if (DIRECTION === 'prev') {
        ELEMANIMATE.classList.add('slide-on-top', 'fadeInDownBig');
      } else {
        ELEMANIMATE.classList.add('slide-on-top', 'fadeInUpBig');
      }
      setTimeout(() => {
        PARENTELEM.insertBefore(ELEMANIMATE, PARENTELEM.firstChild);
        ELEMANIMATE.classList.remove('slide-on-top', 'fadeInUpBig', 'fadeInDownBig');
        this.setCurrentSlide(targetSlide);
        if (targetSlide === 1) {
          // console.log('loop at start');
          this.setPrevSlide(this.getTotalSlides);
          this.setNextSlide(2);
        } else if (targetSlide === this.getTotalSlides) {
          // console.log('loop at end');
          this.setNextSlide(1);
          this.setPrevSlide(prevSlide);
        } else {
          // console.log('normal transition no loop');
          this.setNextSlide(nextSlide);
          this.setPrevSlide(prevSlide);
        }
      }, 300);
      return true;
    },
  },
};
</script>
