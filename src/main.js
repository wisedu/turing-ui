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
import DatetimePicker from '../components/datetime-picker/datetime-picker.vue'
import MultiPicker from '../components/multi-picker/multi-picker.vue'
import ActionSheet from '../components/action-sheet/action-sheet.vue'
import Picker from '../components/picker/picker.vue'
import Selector from '../components/selector/selector.vue'
import TabPicker from '../components/tabPicker/tabPicker.vue'
import Steps from '../components/steps/steps.vue'
import Popup from '../components/popup/popup.vue'

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
	CheckGroup,
	DatetimePicker,
	MultiPicker,
	ActionSheet,
	Picker,
	Selector,
	TabPicker,
	Steps,
	Popup
]

const install = function(Vue, config = {}) {
	if (install.installed) return;
	install.installed = true;
	Object.keys(components).forEach((key) => {
        Vue.component(components[key].name, components[key]);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
};

export default Object.assign({version: '0.0.19'}, {install, ...components});
