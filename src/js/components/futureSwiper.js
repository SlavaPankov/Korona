import Swiper, { FreeMode } from "swiper";

new Swiper('.future-swiper', {
  slidesPerView: 3,

  breakpoints: {
    320: {
      slidesPerView: 1
    },

    1279: {
      slidesPerView: 3
    }
  }
});
