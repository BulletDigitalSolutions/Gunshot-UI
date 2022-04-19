import Vue from 'vue';
import Dev from './serve.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'Axios';
import { Link } from '@inertiajs/inertia-vue'

// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "Vue.use" call
import GunshotUi from '@/entry.esm';
Vue.use(GunshotUi);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin)
Vue.component('link', Link)


Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Dev),
}).$mount('#app');
