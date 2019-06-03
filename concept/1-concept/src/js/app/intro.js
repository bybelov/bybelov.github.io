import Swiper from 'swiper';

export class Intro {
  constructor(selector) {
    this.$el = document.querySelector(selector);
    // console.log(this.$el);
    Slider(this.$el);
  }

}

function Slider(selector) {

  new Swiper(selector, {
    // Optional parameters
    loop: false,
    effect: 'fade',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'custom',
      renderCustom: function(swiper, current, total) {
        
        return `
          <span class="swiper-pagination-current">
            <span class="js-swiper-pagination-current">${current}</span>
            <span class="js-swiper-pagination-next">${current}</span>
          </span> 
          <span class="swiper-pagination-separator">—</span>
          <span class="swiper-pagination-total">${total}</span>`;
      },
      // type: 'fraction',
      // renderFraction: function(currentClass, totalClass) {
      //   return '<span class="' + currentClass + '"></span>' +
      //           '<span class="swiper-pagination-separator">—</span>' +
      //           '<span class="' + totalClass + '"></span>';
      // }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}
