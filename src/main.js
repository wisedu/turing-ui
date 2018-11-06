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
import Select from '../components/select/select.vue'
import ActionSheet from '../components/action-sheet/action-sheet.vue'
import Picker from '../components/picker/picker.vue'
import AreaPicker from '../components/area-picker/area-picker.vue'
import Steps from '../components/steps/steps.vue'
import Popup from '../components/popup/popup.vue'
import Container from '../components/container/container.vue'

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
	Select,
	ActionSheet,
	Picker,
	AreaPicker,
	Steps,
	Popup,
	Container
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
