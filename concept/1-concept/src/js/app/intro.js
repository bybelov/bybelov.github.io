import Swiper from 'swiper';

export class Intro {
  constructor(selector) {
    this.$el = document.querySelector(selector);
    console.log(this.$el);
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
