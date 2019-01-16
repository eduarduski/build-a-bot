import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// ep - entry point for our vue app
new Vue({
  render: h => h(App),
}).$mount('#app');
