import Vue from 'vue'
import Router from 'vue-router'
import Home from './index.vue'
import Input from './pages/input.vue'
import Textarea from './pages/textarea.vue'
import Search from './pages/search.vue'
import Switch from './pages/switch.vue'
import Radio from './pages/radio.vue'
import Checkbox from './pages/checkbox.vue'
import CheckGroup from './pages/check-group.vue'
import Cell from './pages/cell.vue'
import Stepper from './pages/stepper.vue'
import Button from './pages/button.vue'
import Progress from './pages/progress.vue'
import SegmentPicker from './pages/segment-picker.vue'
import ActionSheet from './pages/action-sheet.vue'


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
    path: '/check-group',
    name: 'CheckGroup',
    component: CheckGroup
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
  },
  {
    path: '/button',
    name: 'Button',
    component: Button
  },
  {
    path: '/progress',
    name: 'Progress',
    component: Progress
  },
  {
    path: '/segment-picker',
    name: 'SegmentPicker',
    component: SegmentPicker
  },
  {
    path: '/action-sheet',
    name: 'ActionSheet',
    component: ActionSheet
  }
  ]
})