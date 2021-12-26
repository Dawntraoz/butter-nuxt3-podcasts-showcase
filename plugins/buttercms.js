import { defineNuxtPlugin } from '#app';
import Butter from 'buttercms';

// ButterCMS field dynamic components
import Hero from '~/components/Hero.vue';
import Features from '~/components/Features.vue';
import Testimonials from '~/components/Testimonials.vue';
import TwoColumnWithImage from '~/components/TwoColumnWithImage.vue';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  nuxtApp.vueApp.component('hero', Hero);
  nuxtApp.vueApp.component('features', Features);
  nuxtApp.vueApp.component('testimonials', Testimonials);
  nuxtApp.vueApp.component('two-column-with-image', TwoColumnWithImage);

  return {
    provide: {
      butter: Butter(config.API_TOKEN),
    }
  }
});
