import Swiper from 'swiper';
import TweenMax from 'gsap';

export class Slider {
  constructor(selector) {
    this.$el = document.querySelector(selector);
    this.init(this.$el);
  }

  init(selector) {

    const that = this;

    let options = {
      speed: 1000,
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        type: 'custom'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      a11y: {
        enabled: true,
        prevSlideMessage: 'Назад',
        nextSlideMessage: 'Вперед'
      },
      watchSlidesProgress: true,
      virtualTranslate: true,
      effect: 'customEffect',
      on: {
        init() {
          that.getTotalSlides(this);
          that.getCurrentNextNumberSlide(this);
        },
        slideChange() {
          that.getCurrentNextNumberSlide(this);
          that.prevNextAnimationArrow(this);
        },
        progress(progress) {
          const swiper = this;
          if (swiper.params.effect !== 'customEffect') return;
          that.progress(swiper, progress);
        },
        setTransition(transition) {
          const swiper = this;
          if (swiper.params.effect !== 'customEffect') return;
          that.setTransition(swiper, transition);
        },
        setTranslate(translate) {
          const swiper = this;
          if (swiper.params.effect !== 'customEffect') return;
          that.setTranslate(swiper, translate);
        }
      }
    };

    let slider = new Swiper(selector, options);

  }

  progress(swiper, progress) {
    /* 
    if you need to change something for each progress
    do it here (progress variable is always in range from 0 to 1) representing progress of the whole slider 
    */
  }

  setTransition(swiper, duration) {
    // console.log('transition start, duration = ' + duration);

    const {
      slides,
      $wrapperEl
    } = swiper;
    slides.transition(duration);
    if (swiper.params.virtualTranslate && duration !== 0) {
      let eventTriggered = false;
      slides.transitionEnd(() => {
        // console.log('END transition');

        if (eventTriggered) {
          return;
        };
        if (!swiper || swiper.destroyed) {
          return;
        };
        eventTriggered = true;
        swiper.animating = false;
        const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
        for (let i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }

      });
    }

  }

  setTranslate(swiper) {
    // console.log('translate start');
    const {
      slides
    } = swiper; //analog: const slides = swiper.slides

    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = swiper.slides.eq(i);
      const offset = $slideEl[0].swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      const slideOpacity = 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
      $slideEl
        .css({
          opacity: slideOpacity,
        })
        .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
    }
  }


  getTotalSlides(swiper) {
    const {
      slides
    } = swiper;
    const total = swiper.$el.find('[data-swiper-page-total]')[0];
    total ? total.innerHTML = addExtraZero(slides.length) : console.log('Attribute "data-swiper-page-total" not found!');
  }

  getCurrentNextNumberSlide(swiper) {

    let timeout;
    const wrapper = swiper.$el.find('.swiper-pagination-current__inner')[0];
    wrapper.classList.add('is-animated');
    const prevElement = swiper.$el.find('[data-swiper-page-current]')[0];
    const nextElement = swiper.$el.find('[data-swiper-page-prev]')[0];
    const prevIndex = swiper.previousIndex ? swiper.previousIndex + 1 : 1;
    const nextIndex = swiper.activeIndex + 1;

    nextElement.innerHTML = addExtraZero(prevIndex);
    wrapper.classList.add('is-animated');

    window.clearTimeout(timeout);
    timeout = window.setTimeout(function() {
      prevElement.innerHTML = addExtraZero(nextIndex);
      wrapper.classList.remove('is-animated');
    }, 200);

  }

  getDirection(swiper) {
    if (swiper.previousIndex < swiper.activeIndex) {
      return 'NEXT';
    } else if (swiper.previousIndex > swiper.activeIndex) {
      return 'BACK';
    } else {
      return 'NONE';
    }
  }

  prevNextAnimationArrow(swiper) {

    const { navigation } = swiper;
    const prev = navigation.$prevEl[0].querySelector('.svg-icon').classList;
    const next = navigation.$nextEl[0].querySelector('.svg-icon').classList;

    if (this.getDirection(swiper) === 'NEXT') {
      next.add('is-animated');
      setTimeout(function() {
        next.remove('is-animated');
      }, 610);
    } else if (this.getDirection(swiper) === 'BACK') {
      prev.add('is-animated');
      setTimeout(function() {
        prev.remove('is-animated');
      }, 610);
    }

  }

}


function addExtraZero(n) {
  if (n < 10)
    return '0' + n;
  return n;
}
