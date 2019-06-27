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
import DatetimePicker from './pages/datetime-picker.vue'
import Select from './pages/select.vue'
import ActionSheet from './pages/action-sheet.vue'
import AreaPicker from './pages/area-picker.vue'
import Picker from './pages/picker.vue'
import Steps from './pages/steps.vue'
import Popup from './pages/popup.vue'
import IndexList from './pages/index-list.vue'
import Container from './pages/container.vue'
import Badge from './pages/badge.vue'
import Header from './pages/header.vue'
import Toast from './pages/Toast.vue'


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
    path: '/datetime-picker',
    name: 'DatetimePicker',
    component: DatetimePicker
  },
  {
    path: '/select',
    name: 'Select',
    component: Select
  },
  {
    path: '/action-sheet',
    name: 'ActionSheet',
    component: ActionSheet
  },
  {
    path: '/picker',
    name: 'Picker',
    component: Picker
  },
  {
    path: '/area-picker',
    name: 'AreaPicker',
    component: AreaPicker
  },
  {
    path: '/steps',
    name: 'Steps',
    component: Steps
  },
  {
    path: '/popup',
    name: 'Popup',
    component: Popup
  },
  {
    path: '/index-list',
    name: 'IndexList',
    component: IndexList
  },
  {
    path: '/container',
    name: 'Container',
    component: Container
  },
  {
    path: '/badge',
    name: 'Badge',
    component: Badge
  },
  {
    path: '/header',
    name: 'Header',
    component: Header
  },
  {
    path: '/toast',
    name: 'Toast',
    component: Toast
  }
  ]
})