import Swiper, { Navigation } from "swiper";

// swiper core style
import 'swiper/css';

// imports styles
import 'swiper/css/navigation';

new Swiper('.partners-swiper', {
  modules: [Navigation],

  slidesPerView: 4,
  spaceBetween: 0,

  navigation: {
    prevEl: '.partners-swiper__buttons-prev',
    nextEl: '.partners-swiper__buttons-next',
  },

  breakpoints: {
    1279: {
      slidesPerView: 4,
      spaceBetween: 0,
    },

    320: {
      slidesPerView: 2,
      spaceBetween: 0,
    }
  }
});
