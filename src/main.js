import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import VueAnalytics from 'vue-analytics'
import VClickOutside from "v-click-outside";
import VScrollLock from "v-scroll-lock";
import VueHotkey from 'v-hotkey'


Vue.config.productionTip = false;

Vue.use(VClickOutside);
Vue.use(VScrollLock)
Vue.use(VueHotkey)

Vue.use(VueAnalytics, {
  id: 'UA-126133790-2',
  debug: {
   sendHitTask: process.env.NODE_ENV === 'production'
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
  methods: {
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    playSound(sound) {
      let audio = new Audio(sound);
      audio.play()
    }
  }
}).$mount('#app');