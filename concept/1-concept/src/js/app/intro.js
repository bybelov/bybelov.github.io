import Swiper from 'swiper';
import TweenMax from 'gsap';

export class Intro {
  constructor(selector) {
    this.$el = document.querySelector(selector);
    this.currentTransitionSpeed = 1000;
    this.slider(this.$el);
  }

  getTransitionSpeed() {
    const transitionSpeed = this.currentTransitionSpeed;
    // reset the variable for future calls
    this.currentTransitionSpeed = 0;
    return transitionSpeed;
  }

  progress(swiper, progress) {
    /* 
    if you need to change something for each progress
    do it here (progress variable is always in range from 0 to 1) representing progress of the whole slider 
    */
    console.log('progress = ', progress);
   
  }

  /*
   this is a function for the setTransition swiper event. Can be used for setting the CSS transition duration on slides or wrapper. Sometimes called when the change is supposed to be animated, sometimes not called if the change should be immediate (e.g. dragging the slider)
  */
  setTransition(swiper, transitionSpeed) {
    this.currentTransitionSpeed = transitionSpeed;
    console.log('transition', transitionSpeed);
  }

  setTranslate(swiper, wrapperTranslate) {
    const durationInSeconds = this.getTransitionSpeed() / 500;
    const slides = Object.values(swiper.slides).slice(0, -1);
    // do magic with each slide
    slides.map((slide, index) => {
      // to put the slides behind each other we have to set their CSS translate accordingly since by default they are arranged in line.
      const offset = slide.swiperSlideOffset;
      let x = -offset;
      if (!swiper.params.virtualTranslate) x -= swiper.translate;
      let y = 0;
      if (!swiper.isHorizontal()) {
        y = x;
        x = 0;
      }
      TweenMax.set(slide, {
        x,
        y
      });

      const circle = slide.querySelector('.slide__circle');

      // do our animation stuff!
      const clip = (val, min, max) => Math.max(min, Math.min(val, max));
      const ZOOM_FACTOR = 0.05;

      const opacity = Math.max(1 - Math.abs(slide.progress), 0);

      const clippedProgress = clip(slide.progress, -1, 1);
      const scale = 1 - ZOOM_FACTOR * clippedProgress;

      // you can do your CSS animation instead of using tweening.
      TweenMax.to(slide, durationInSeconds, {
        scale,
        opacity
      });
    });    

  }

  slider(selector) {

    const that = this;
  
    this.swiper = new Swiper(selector, {
      // Optional parameters
  
      speed: 1000, // Set the speed of your animation in ms
      watchSlidesProgress: true, // enable the 'proress' property on each slide
      virtualTranslate: true, // makes the slider not move automatically, you'll have to do the translate animation
      watchSlidesVisibility: true, // slides that in viewport will have additional visible class
      effect: 'myCustomTransition', // optional - set the name of your animation. You can later check if your animation is actually applied and abort animation if not.
  
      loop: false,
      roundLengths: true,
      // effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        type: 'custom'
      },
  
      on: {
        init: function() {
  
          // pagination animation
  
          let current = this.$el[0].querySelector('.js-swiper-pagination-current');
          let total = this.$el[0].querySelector('.swiper-pagination-total');
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
  
          updateNextPagination(index+1, currentWrapper, current, currentNext);
  
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
          let prev = this.navigation.$prevEl[0].querySelector('.svg-icon').classList;
          prev.add('is-animated');
          setTimeout(function() {
            prev.remove('is-animated');
          },610);
        },
        slideNextTransitionStart: function() {
  
          let next = this.navigation.$nextEl[0].querySelector('.svg-icon').classList;
          next.add('is-animated');
          setTimeout(function() {
            next.remove('is-animated');
          },610);
  
        },
  
        // custom animations
        progress(progress) {
          const swiper = this;
          if (swiper.params.effect !== 'myCustomTransition') return;
          that.progress(swiper, progress);
        },
        setTransition(transition) {
          const swiper = this;
          if (swiper.params.effect !== 'myCustomTransition') return;
          that.setTransition(swiper, transition);
        },
        setTranslate(translate) {

          const swiper = this;
          if (swiper.params.effect !== 'myCustomTransition') return;
          that.setTranslate(swiper, translate);
        }
  
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
  
    // function animateCircle(element){
  
    // }
  
  }
  
}
