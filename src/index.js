import TsBanner from './components/TsBanner.vue'
import TsButton from './components/TsButton.vue'
import './css/main.scss'

const components = {
	TsBanner,
	TsButton
};

const plugin = {
	install (Vue) {
		for (const prop in components) {
			if (components.hasOwnProperty(prop)) {
				const component = components[prop];
				Vue.component(component.name, component);
			}
		}
	}
};

export default plugin;