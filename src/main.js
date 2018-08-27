import loadSprite from '../components/utils/load-spirte'
import 'mand-mobile/lib/mand-mobile.css'
import './assets/style.css'

import TgInput from '../components/input/input.vue'
import TgTextarea from '../components/textarea/textarea.vue'
import TgSwitch from '../components/switch/switch.vue'
import TgRadio from '../components/radio/radio.vue'
import TgCell from '../components/cell/cell.vue'
import TgCellGroup from '../components/cell-group/cell-group.vue'
import TgStepper from '../components/stepper/stepper.vue'
import TgSearch from '../components/search/search.vue'
import TgButton from '../components/button/button.vue'
import TgButtonGroup from '../components/button-group/button-group.vue'
import TgProgress from '../components/progress/progress.vue'
import TgCheckbox from '../components/checkbox/checkbox.vue'
import TgCheckGroup from '../components/check-group/check-group.vue'

loadSprite();
const components = [
	TgInput,
	TgTextarea,
	TgSwitch,
	TgRadio,
	TgCell,
	TgCellGroup,
	TgStepper,
	TgSearch,
	TgButton,
	TgButtonGroup,
	TgProgress,
	TgCheckbox,
	TgCheckGroup
]

const install = function(Vue, config = {}) {
	if (install.installed) return;
	install.installed = true
	Vue.component(TgInput.name, TgInput);
	Vue.component(TgTextarea.name, TgTextarea);
	Vue.component(TgSwitch.name, TgSwitch);
	Vue.component(TgRadio.name, TgRadio);
	Vue.component(TgCell.name, TgCell);
	Vue.component(TgCellGroup.name, TgCellGroup);
	Vue.component(TgStepper.name, TgStepper);
	Vue.component(TgSearch.name, TgSearch);	
	Vue.component(TgButton.name, TgButton);
	Vue.component(TgButtonGroup.name, TgButtonGroup);
	Vue.component(TgProgress.name, TgProgress);
	Vue.component(TgCheckbox.name, TgCheckbox);
	Vue.component(TgCheckGroup.name, TgCheckGroup);	
};

// const Tg = {
// 	 eslint-disable no-undef 
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
	version: '0.0.12',
	install
}
