/* eslint-disable @typescript-eslint/ban-ts-comment */
import './public-path.js';
import { createApp } from 'vue';
import App from './App.vue';

// @ts-ignore
let instance: any = null;

// @ts-ignore
function render(props = {}) {
  // @ts-ignore
  const { container } = props;

  instance = createApp(App);
  instance.mount(container ? container.querySelector('#app') : '#app');
}

// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('%c%s', 'color: green;', 'vue3.0 app bootstraped');
}
// @ts-ignore
export async function mount(props) {
  render(props);
  instance.config.globalProperties.$onGlobalStateChange =
    props.onGlobalStateChange;
  instance.config.globalProperties.$setGlobalState = props.setGlobalState;
}

export async function unmount() {
  instance.unmount();
  instance._container.innerHTML = '';
  instance = null;
}
