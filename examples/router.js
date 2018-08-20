import Vue from 'vue'
import Router from 'vue-router'
import Home from './index.vue'
import Input from './pages/input.vue'
import Textarea from './pages/textarea.vue'
import Search from './pages/search.vue'
import Switch from './pages/switch.vue'
import Radio from './pages/radio.vue'
import Checkbox from './pages/checkbox.vue'
import Cell from './pages/cell.vue'
import Stepper from './pages/stepper.vue'


Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/input',
    name: 'Input',
    component: Input
  },
  {
    path: '/textarea',
    name: 'Textarea',
    component: Textarea
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/switch',
    name: 'Switch',
    component: Switch
  },
  {
    path: '/radio',
    name: 'Radio',
    component: Radio
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    component: Checkbox
  },
  {
    path: '/cell',
    name: 'Cell',
    component: Cell
  },
  {
    path: '/stepper',
    name: 'Stepper',
    component: Stepper
  }
  ]
})