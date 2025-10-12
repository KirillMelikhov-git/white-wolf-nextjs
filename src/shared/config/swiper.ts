import {
  Autoplay,
  Pagination,
  Navigation,
  A11y,
  Keyboard,
} from 'swiper/modules';

export const SWIPER_DEFAULTS = {
  modules: [Autoplay, Pagination, Navigation, A11y, Keyboard],
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: true,
  },
  a11y: {
    enabled: true,
  },
  keyboard: {
    enabled: true,
  },
  // Для ленивой загрузки изображений используйте data-src вместо src
  // и добавьте класс 'swiper-lazy' к изображениям
  // Пример: <img data-src="image.jpg" class="swiper-lazy">
} as const;
