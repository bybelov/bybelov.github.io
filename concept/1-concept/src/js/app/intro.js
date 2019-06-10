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

      speed: 1000, // Set the speed of your animation in ms
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

          scaleCircle(this.$el, '.slide__circle');
          swipeTitle(this.$el, '.slide__title');
          swipeLeftPicture(this.$el, '.slide__picture.left');
          swipeRightPicture(this.$el, '.slide__picture.right');

        },
        slideNextTransitionStart: function() {

          const next = this.navigation.$nextEl[0].querySelector('.svg-icon').classList;
          next.add('is-animated');
          setTimeout(function() {
            next.remove('is-animated');
          }, 610);

          scaleCircle(this.$el, '.slide__circle');
          swipeTitle(this.$el, '.slide__title');
          swipeLeftPicture(this.$el, '.slide__picture.left');
          swipeRightPicture(this.$el, '.slide__picture.right');
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

    function getPrevCurSlide(sliderDOM, selector) {
      const slideActive = sliderDOM.find('.swiper-slide-active');
      const current = slideActive.find(selector);
      const slidePrevios = sliderDOM.find('.swiper-slide-prev, .swiper-slide-next');
      const previos = slidePrevios.find(selector);
      return {
        current,
        previos
      };
    }

    function swipeLeftPicture(sliderDOM, selector) {

      const slide = getPrevCurSlide(sliderDOM, selector);

      // out left
      TweenMax.to(slide.previos, 0.25, {
        rotation: 70,
        autoAlpha: 0,
        xPercent: -300,
        ease: Power0.easeNone
      });
      // in left
      TweenMax.set(slide.current, {
        autoAlpha: 0,
        xPercent: -300
      });

      TweenMax.to(slide.current, 0.75, {
        delay: 0.25,
        autoAlpha: 1,
        rotation: 0,
        xPercent: 0,
        ease: Expo.easeOut
      });
    }

    function swipeRightPicture(sliderDOM, selector) {

      const slide = getPrevCurSlide(sliderDOM, selector);

      // out right
      TweenMax.to(slide.previos, 0.25, {
        rotation: -70,
        autoAlpha: 0,
        xPercent: 300,
        ease: Power0.easeNone
      });

      // in right
      TweenMax.set(slide.current, {
        autoAlpha: 0,
        xPercent: 300
      });

      TweenMax.to(slide.current, 0.75, {
        delay: 0.25,
        autoAlpha: 1,
        rotation: 0,
        xPercent: 0,
        ease: Expo.easeOut
      });

    }



    function swipeTitle(sliderDOM, selector) {

      const slide = getPrevCurSlide(sliderDOM, selector);

      // out
      TweenMax.to(slide.previos, 0.25, {
        xPercent: 200,
        autoAlpha: 0
      });

      // in
      TweenMax.set(slide.current, {
        autoAlpha: 0,
        xPercent: -200
      });

      TweenMax.to(slide.current, 0.5, {
        delay: 0.25,
        autoAlpha: 1,
        xPercent: 0
      });

    }

    function scaleCircle(sliderDOM, selector) {

      const slide = getPrevCurSlide(sliderDOM, selector);

      // out
      TweenMax.to(slide.previos, 0.5, {
        autoAlpha: 0.1,
        scale: 0.4
      });

      // in
      TweenMax.set(slide.current, {
        autoAlpha: 0,
        scale: 0.4
      });

      TweenMax.to(slide.current, 0.5, {
        ease: Elastic.easeOut.config(1, 0.5),
        delay: 0.5,
        autoAlpha: 1,
        scale: 1
      });

    }

  }
}
