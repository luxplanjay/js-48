import Typed from 'typed.js';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import { info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
});

new Typed('.primary-banner .text', {
  strings: ['Супер скидки на соль только у нас', 'Бенз по дешевке до пятницы'],
  typeSpeed: 40,
  backSpeed: 20,
  loop: true,
});

tippy('.primary-banner .cta-btn', {
  content: 'Скажи паляница!',
  placement: 'bottom',
});

const onClick = () => {
  info({
    title: 'Button Clicked',
    text: 'You have clicked the button. You may now complete the process of reading the notice.',
  });
};

document
  .querySelector('.primary-banner .cta-btn')
  .addEventListener('click', onClick);
