
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import Home from './index'
import router from './router'
Vue.use(Home)

import { Button } from 'cube-ui';
console.log(Button)
// Vue.use(Input);
import 'mand-mobile/lib/mand-mobile.css'
import '../src/assets/style.css'


import TgInput from '../components/input/input.vue'
import TgTextarea from '../components/textarea/textarea.vue'
import TgSwitch from '../components/switch/switch.vue'
import TgRadio from '../components/radio/radio.vue'
import TgCell from '../components/cell/cell.vue'
import TgCellGroup from '../components/cell-group/cell-group.vue'
import TgStepper from '../components/stepper/stepper.vue'
import TgSearch from '../components/search/search.vue'
Vue.component(TgInput.name, TgInput);
Vue.component(TgTextarea.name, TgTextarea);
Vue.component(TgSwitch.name, TgSwitch);
Vue.component(TgRadio.name, TgRadio);
Vue.component(TgCell.name, TgCell);
Vue.component(TgCellGroup.name, TgCellGroup);
Vue.component(TgStepper.name, TgStepper);
Vue.component(TgSearch.name, TgSearch);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render (createElement) {
    return createElement(App)
  }
}).$mount('#app')