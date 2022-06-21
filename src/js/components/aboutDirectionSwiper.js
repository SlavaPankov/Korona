import Swiper, { Pagination, Navigation } from "swiper";

// swiper core style
import 'swiper/css';

// modules styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

new Swiper('.direction-swiper', {
  modules: [Navigation, Pagination],
  allowTouchMove: false,

  pagination: {
    el: '.direction-swiper__pagination',
    type: "fraction",

    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
        '  —  ' +
        '<span class="' + totalClass + '"></span>';
    }
  },

  navigation: {
    prevEl: '.direction-swiper__button-prev',
    nextEl: '.direction-swiper__button-next'
  },

});
