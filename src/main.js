
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import { Button } from 'cube-ui'
import { Cell, CellGroup  } from 'vant'
import { Picker } from 'mand-mobile' 

import 'mand-mobile/lib/mand-mobile.css'
import '../static/css/style.css'

Vue.use(Button)
Vue.use(Cell).use(CellGroup)

Vue.component(Picker.name, Picker)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render (createElement) {
    return createElement(App)
  }
}).$mount('#app')


// import { Button } from 'cube-ui'
// import { Cell, CellGroup  } from 'vant'
// import { Picker } from 'mand-mobile' 

// import 'mand-mobile/lib/mand-mobile.css'
// import '../static/css/style.css'

// const install = function(Vue, config = {}) {
// 	if (install.installed) return;
// 	Vue.component(Button.name, Button);
// 	Vue.component(Cell.name, Cell);
// 	Vue.component(CellGroup.name, CellGroup);
// 	Vue.component(Picker.name, Picker)
// };
// if (typeof window !== 'undefined' && window.Vue) {
// 	install(window.Vue);
// };
// export default {
// 	Button,
// 	Cell,
// 	CellGroup,
// 	Picker
// };
