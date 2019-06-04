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
    roundLengths: true,
    effect: 'fade',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'custom'
    },

    on: {
      init: function() {

        let current = this.$el[0].querySelector('.js-swiper-pagination-current');
        let total = this.$el[0].querySelector('.swiper-pagination-total');
        total.innerHTML = this.slides.length;
        current.innerHTML = this.activeIndex + 1;

      },
      slideChange: function() {

        let elements = this.pagination.$el[0],
          index = this.activeIndex + 1,
          currentWrapper,
          current,
          currentNext;

        currentWrapper = elements.querySelector('.swiper-pagination-current__inner');
        current = elements.querySelector('.js-swiper-pagination-current');
        currentNext = elements.querySelector('.js-swiper-pagination-next');

        updateNextPagination(index, currentWrapper, current, currentNext);

      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    a11y: {
      enabled: true,
      prevSlideMessage: 'Назад',
      nextSlideMessage: 'Вперед'
    }
  });

  function updateNextPagination(value, wrapper, current, next) {

    let timeout;
    next.innerHTML = value;
    wrapper.classList.add('is-changing');

    window.clearTimeout(timeout);
    timeout = window.setTimeout(function() {
      current.innerHTML = value;
      wrapper.classList.remove('is-changing');
    }, 290);

  }

}
