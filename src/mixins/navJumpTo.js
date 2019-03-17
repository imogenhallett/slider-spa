const navJumpToMixin = {
  methods: {
    jumpToSlide(targetSlide) {
      if (targetSlide === this.getCurrentSlide) {
        return false;
      }
      const PARENTELEM = document.getElementById('slides-wrap');
      const DIRECTION = (targetSlide > this.getCurrentSlide) ? 'next' : 'prev';
      const ELEMNAV = document.getElementById('navbarNavDropdown');
      const ELEMANIMATE = document.getElementById(`slide-${targetSlide}`);
      const ELEMTOHIDE = document.getElementById(`slide-${this.getCurrentSlide}`);
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
        ELEMTOHIDE.classList.add('hide-slide');
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
export default navJumpToMixin;
