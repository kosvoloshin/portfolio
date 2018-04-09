const slider = require('./common/slider');

slider(); // инициализируем слайдер

const $ = require('jquery');

import preloader from './common/preloader';

$(document).ready(() => {
  preloader();
})

require('./common/google-maps');

const menuInit = require('./common/menu');

menuInit.init();

const flipInit = require('./common/flip');

flipInit.init();

require('./common/parallax');

require('./common/scroll-anchor');

//require('./common/blog-scroll');

//require('./common/blog-nav');

require('./common/circles-active');
