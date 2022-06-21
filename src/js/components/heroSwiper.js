import Swiper, { Navigation } from "swiper";

// swiper core style
import 'swiper/css';

// modules styles
import 'swiper/css/navigation';

new Swiper('.hero-swiper', {
  modules: [Navigation],

  navigation: {
    prevEl: '.hero-swiper__btn-prev',
    nextEl: '.hero-swiper__btn-next',
  }
});
