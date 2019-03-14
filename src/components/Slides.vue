<template>
  <div>
    <app-secondary-nav></app-secondary-nav>
    <div class="container-fluid">
      <div id="slides-wrap" class="row">
        <div id="slide-1"
          class="d-flex flex-row flex-wrap justify-content-center align-content-center
            slide animated slide-1"
        >
          <div class="content title">
            <h2 class="text-center">Customer Problem</h2>
            <p class="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce vel lacus nec risus convallis vestibulum.
            </p>
            <p class="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce vel lacus nec risus convallis vestibulum.
            </p>
          </div>
        </div>
        <div id="slide-2"
          class="d-flex flex-row flex-wrap justify-content-center align-content-center
            slide slide hide-slide animated slide-2"
        >
          <div class="content">
            <h2 class="text-center">Title Slide 2</h2>
            <p class="text-center">Some text</p>
            <p class="text-center">Some text</p>
          </div>
        </div>
        <div id="slide-3"
          class="d-flex flex-row flex-wrap justify-content-center align-content-center
            slide hide-slide animated slide-3"
        >
          <div class="content">
            <h2 class="text-center">Title Slide 3</h2>
            <p class="text-center">Some text</p>
            <p class="text-center">Some text</p>
          </div>
        </div>
        <div id="slide-4"
          class="d-flex flex-row flex-wrap justify-content-center align-content-center
            slide hide-slide animated slide-4"
        >
          <div class="content">
            <h2 class="text-center">Title Slide 4</h2>
            <p class="text-center">Some text</p>
            <p class="text-center">Some text</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import { mapGetters, mapActions } from 'vuex';
import { setTimeout } from 'timers';
import SecondaryNav from './navigation/SecondaryNav.vue';

export default {
  name: 'home',
  components: {
    'app-secondary-nav': SecondaryNav,
  },
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
    scrollInit(event) {
      const PARENTELEM = document.getElementById('slides-wrap');
      let elemAnimate = document.getElementById(`slide-${this.getNextSlide}`);
      let direction = 'next';
      let prevSlide = this.getPrevSlide;
      let nextSlide = this.getNextSlide;
      if (event.deltaY < 0) {
        // console.log('scrolling up');
        elemAnimate = document.getElementById(`slide-${this.getPrevSlide}`);
        direction = 'prev';
        elemAnimate.classList.remove('hide-slide');
        elemAnimate.classList.add('slide-on-top', 'fadeInDownBig');
      } else {
        // console.log('scrolling down');
        elemAnimate = document.getElementById(`slide-${this.getNextSlide}`);
        direction = 'next';
        elemAnimate.classList.remove('hide-slide');
        elemAnimate.classList.add('slide-on-top', 'fadeInUpBig');
      }
      setTimeout(() => {
        PARENTELEM.insertBefore(elemAnimate, PARENTELEM.firstChild);
        elemAnimate.classList.remove('slide-on-top', 'fadeInUpBig', 'fadeInDownBig');
        if (direction === 'next') {
          nextSlide += 1;
          this.setPrevSlide(this.getCurrentSlide);
          this.setCurrentSlide(this.getNextSlide);
          this.setNextSlide(nextSlide);
          if (nextSlide > this.getTotalSlides) {
            this.setNextSlide(1);
          }
        } else {
          prevSlide -= 1;
          this.setNextSlide(this.getCurrentSlide);
          this.setCurrentSlide(this.getPrevSlide);
          this.setPrevSlide(prevSlide);
          if (prevSlide < 1) {
            this.setPrevSlide(this.getTotalSlides);
          }
        }
      }, 300);
    },
    handleScroll: _.debounce(function () {
      this.scrollInit(event);
    }, 500, { leading: true, trailing: false }),
  },
  created() {
    window.addEventListener('wheel', this.handleScroll, { passive: true });
  },
  mounted() {
    this.setTotalSlides(document.querySelectorAll('.slide').length);
    this.setPrevSlide(this.getTotalSlides);
  },
};
</script>
