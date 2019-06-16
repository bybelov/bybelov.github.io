import './vendor';
// import {Intro} from './app/intro';
import {Slider} from './app/slider';
import {Panel} from './app/panel';

window.onload = function() {

  // new Intro('.js-slider');
  new Slider('.js-slider');
  new Panel('[data-hamburger]', '[data-panel]');

};
