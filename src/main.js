import loadSprite from '../components/utils/load-spirte'
import 'mand-mobile/lib/mand-mobile.css'
import './assets/style.css'

import Input from '../components/input/input.vue'
import Textarea from '../components/textarea/textarea.vue'
import Switch from '../components/switch/switch.vue'
import Radio from '../components/radio/radio.vue'
import Cell from '../components/cell/cell.vue'
import CellGroup from '../components/cell-group/cell-group.vue'
import Stepper from '../components/stepper/stepper.vue'
import Search from '../components/search/search.vue'
import Button from '../components/button/button.vue'
import ButtonGroup from '../components/button-group/button-group.vue'
import Progress from '../components/progress/progress.vue'
import Checkbox from '../components/checkbox/checkbox.vue'
import CheckGroup from '../components/check-group/check-group.vue'

loadSprite();
const components = [
	Input,
	Textarea,
	Switch,
	Radio,
	Cell,
	CellGroup,
	Stepper,
	Search,
	Button,
	ButtonGroup,
	Progress,
	Checkbox,
	CheckGroup
]

const install = function(Vue, config = {}) {
	if (install.installed) return;
	install.installed = true
	Vue.component(Input.name, Input);
	Vue.component(Textarea.name, Textarea);
	Vue.component(Switch.name, Switch);
	Vue.component(Radio.name, Radio);
	Vue.component(Cell.name, Cell);
	Vue.component(CellGroup.name, CellGroup);
	Vue.component(Stepper.name, Stepper);
	Vue.component(Search.name, Search);	
	Vue.component(Button.name, Button);
	Vue.component(ButtonGroup.name, ButtonGroup);
	Vue.component(Progress.name, Progress);
	Vue.component(Checkbox.name, Checkbox);
	Vue.component(CheckGroup.name, CheckGroup);	
};

// const Tg = {
// 	version: '0.0.0',
// 	install
// }

// components.forEach((Component) => {
// 	var name = Component.name.replace(/^Tg-/i, '');
// 	name = name.charAt(0).toUpperCase() + name.slice(1)
// 	Tg[name] = Component;
// })

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
};
export {
	Input,
	Textarea,
	Switch,
	Radio,
	Cell,
	CellGroup,
	Stepper,
	Search,
	Button,
	ButtonGroup,
	Progress,
	Checkbox,
	CheckGroup
}

export default {
	version: '0.0.13',
	install
}
