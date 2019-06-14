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
          const swiper = this;
          that.getCurrentNextNumberSlide(this);
          that.prevNextAnimationArrow(this);

          // animation
          moveRotateIn(swiper, '.slide__picture.left');
          moveRotateOut(swiper, '.slide__picture.left');
          moveRotateIn(swiper, '.slide__picture.right', true);
          moveRotateOut(swiper, '.slide__picture.right', true);
          moveIn(swiper, '.slide__title');
          moveOut(swiper, '.slide__title');
          moveIn(swiper, '.slide__buy', 0.75);
          moveOut(swiper, '.slide__buy', 0.5);
          scaleIn(swiper, '.slide__circle');
          scaleOut(swiper, '.slide__circle');
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

    const { slides, $wrapperEl } = swiper;
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
    const { slides } = swiper; //analog: const slides = swiper.slides

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


// ANIMATION
// Out - find previos element;
// In -  find active(next) element;

function moveRotateOut(swiper, el, reverse = false) {
  const {slides} = swiper;
  const element = slides[swiper.previousIndex].querySelector(el);

  let xPercent = -300;
  let rotation = 70;
  if(reverse) {
    xPercent = xPercent * -1;
    rotation = rotation * -1;
  }
  TweenMax.to(element, 0.25, {
    rotation: rotation,
    autoAlpha: 0,
    xPercent: xPercent,
    ease: Power0.easeNone
  });
}

function moveRotateIn(swiper, el, reverse = false) {
  const {slides} = swiper;
  const element = slides[swiper.activeIndex].querySelector(el);
  let xPercent = -300;
  if(reverse) {
    xPercent = xPercent * -1;
  }
  TweenMax.set(element, {
    autoAlpha: 0,
    xPercent: xPercent
  });

  TweenMax.to(element, 0.75, {
    delay: 0.25,
    autoAlpha: 1,
    rotation: 0,
    xPercent: 0,
    ease: Expo.easeOut
  });
}

function moveIn(swiper, el, delay = 0.5) {
  const {slides} = swiper;
  const element = slides[swiper.activeIndex].querySelector(el);
  TweenMax.set(element, {
    autoAlpha: 0,
    xPercent: -200
  });

  TweenMax.to(element, delay, {
    delay: 0.25,
    autoAlpha: 1,
    xPercent: 0
  });
}

function moveOut(swiper, el, delay = 0.25) {
  const {slides} = swiper;
  const element = slides[swiper.previousIndex].querySelector(el);
  TweenMax.to(element, delay, {
    xPercent: 200,
    autoAlpha: 0
  });
}

function scaleIn(swiper, el) {
  const {slides} = swiper;
  const element = slides[swiper.activeIndex].querySelector(el);
  TweenMax.set(element, {
    autoAlpha: 0,
    scale: 0.4
  });

  TweenMax.to(element, 0.5, {
    ease: Elastic.easeOut.config(1, 0.5),
    delay: 0.5,
    autoAlpha: 1,
    scale: 1
  });
}

function scaleOut(swiper, el) {
  const {slides} = swiper;
  const element = slides[swiper.previousIndex].querySelector(el);
  TweenMax.to(element, 0.5, {
    autoAlpha: 0.1,
    scale: 0.4
  });
}
