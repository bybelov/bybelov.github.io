import Swiper from 'swiper';
import TweenMax from 'gsap';

export class Intro {
  constructor(selector) {
    this.$el = document.querySelector(selector);
    this.slider(this.$el);
  }

  slider(selector) {

    const tl = new TimelineMax({
      ease: Bounce
    });

    this.swiper = new Swiper(selector, {
      // Optional parameters

      speed: 2000, // Set the speed of your animation in ms
      effect: 'fade',
      loop: false,
      // roundLengths: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'custom'
      },

      on: {
        init: function() {

          // pagination animation

          const current = this.$el[0].querySelector('.js-swiper-pagination-current');
          const total = this.$el[0].querySelector('.swiper-pagination-total');
          total.innerHTML = this.slides.length;
          current.innerHTML = this.activeIndex + 1;

          // slide picture animation

        },
        slideChange: function() {

          // pagination animation
          let elements = this.pagination.$el[0],
            index = this.activeIndex,
            currentWrapper,
            current,
            currentNext;

          currentWrapper = elements.querySelector('.swiper-pagination-current__inner');
          current = elements.querySelector('.js-swiper-pagination-current');
          currentNext = elements.querySelector('.js-swiper-pagination-next');

          updateNextPagination(index + 1, currentWrapper, current, currentNext);

          // animate circle
          // let slideCurrent = this.slides[index];
          // let circleCurrent = slideCurrent.querySelector('.slide__circle');
          // TweenMax.from(circleCurrent, 1, { opacity: 0 });

          // slide picture animation
          // let slideCurrent = this.slides[index];
          // slideCurrent.querySelectorAll('.slide__img').forEach(element => {
          //   element.classList.add('is-animated');
          // });;

        },
        slidePrevTransitionStart: function() {
          const prev = this.navigation.$prevEl[0].querySelector('.svg-icon').classList;
          prev.add('is-animated');
          setTimeout(function() {
            prev.remove('is-animated');
          }, 610);

          scaleCircle(this.$el);
          swipeTitle(this.$el);
          
        },
        slideNextTransitionStart: function() {

          const next = this.navigation.$nextEl[0].querySelector('.svg-icon').classList;
          next.add('is-animated');
          setTimeout(function() {
            next.remove('is-animated');
          }, 610);

          scaleCircle(this.$el);
          swipeTitle(this.$el);
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
      wrapper.classList.add('is-animated');

      window.clearTimeout(timeout);
      timeout = window.setTimeout(function() {
        current.innerHTML = value;
        wrapper.classList.remove('is-animated');
      }, 290);

    }

    function swipeTitle(sliderDOM) {

      const slideActive = sliderDOM.find('.swiper-slide-active');
      const active = slideActive.find('.slide__title');
      
      const oldActive = sliderDOM.find('.swiper-slide-prev, .swiper-slide-next');
      const old = oldActive.find('.slide__title');

   
      // out
      TweenMax.to(old, 0.5, {
        x: '200%',
        opacity: 0
      });

      console.log(old);
      

      // in
      TweenMax.set(active, {
        opacity: 0,
        x: '-200%'
      });

      TweenMax.to(active, 1,{
        delay: 0.5,
        opacity: 1,
        x: '0%'
      });

    }

    function scaleCircle(sliderDOM) {
      
      const slideActive = sliderDOM.find('.swiper-slide-active');
      const slideCircle = slideActive.find('.slide__circle');
      
      const oldActive = sliderDOM.find('.swiper-slide-prev, .swiper-slide-next');
      const oldSlideCircle = oldActive.find('.slide__circle');
   
      // out
      TweenMax.to(oldSlideCircle, 1, {
        opacity: 0.1,
        scale: 0.4
      });

      // in
      TweenMax.set(slideCircle, {
        opacity: 0,
        scale: 0.4
      });

      TweenMax.to(slideCircle, 1,{
        ease: Elastic.easeOut.config(1, 0.5),
        delay: 0.9,
        opacity: 1,
        scale: 1
      });

    }

  }

}
