import {TweenMax} from 'gsap';

export class Panel {
  constructor(button, container) {
    this.hamburger = document.querySelector(button);
    this.panel = document.querySelector(container);
    this.toggleClass(this.hamburger, this.panel);
    Overlay.init();
  }

  toggleClass(hamburger, panel) {
    hamburger.addEventListener('click', function() {
      if(this.classList.contains('is-active')) {
        this.classList.remove('is-active');
        movePanelOut(panel);
        Overlay.close();
      }else{
        this.classList.add('is-active');
        movePanelIn(panel);
        Overlay.open();
      }
    });

  }

}

let Overlay = Overlay || {};
Overlay = {
  div: null,
  isOpen: !1,
  init() {
    Overlay.el = document.querySelector('.overlay');
  },
  open() {
    Overlay.isOpen = !0;
    TweenMax.to(this.el, 0.5, {
      display: 'block',
      ease: Power4.easeOut,
      backgroundColor: 'rgba(255,255,255,.8)'
    });
  },
  close() {
    Overlay.isOpen = !1;
    TweenMax.to(this.el, 0.5, {
      display: 'none',
      ease: Power4.easeOut,
      backgroundColor: 'rgba(255,255,255,0)'
    });
  }
};

function movePanelOut(el) {
  TweenMax.to(el, 0.5, {
    display: 'none',
    x: -800
  });
}

function movePanelIn(el) {

  TweenMax.set(el, {
    display: 'none',
    x: -800
  });

  TweenMax.to(el, 0.75, {
    display: 'block',
    ease: Power4.easeOut,
    x: 0
  });
}
