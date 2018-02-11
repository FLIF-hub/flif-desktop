
var httpVueLoader = window.httpVueLoader;
Vue.component('window-controls');

const app = new Vue({
  el: '#app',
  components: {
    'window-controls': httpVueLoader('scripts/components/window-controls.vue')
  }
});
