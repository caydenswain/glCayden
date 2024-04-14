import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';  // Make sure this import is not removed

Vue.config.productionTip = false;

new Vue({
    router,
    store,  // This line actually uses the 'store' import
    render: h => h(App)
}).$mount('#app');
