import { defineNuxtPlugin } from '#app';
import Butter from 'buttercms';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  
  return {
    provide: {
      butter: Butter(config.API_TOKEN),
    }
  }
});
