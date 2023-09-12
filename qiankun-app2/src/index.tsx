import './public-path.js';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// @ts-ignore
function render(props) {
  const { container } = props;
  ReactDOM.render(
    <App />,
    container
      ? container.querySelector('#root')
      : document.querySelector('#root')
  );
}

// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}
// @ts-ignore
export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}
// @ts-ignore
export async function mount(props) {
  // @ts-ignore
  props.onGlobalStateChange((state, prev) => {
    console.log(state, prev);
    setTimeout(() => {
      props.setGlobalState({
        ...state,
        age: 20,
      });
    }, 2000);
  });

  console.log('[react16] props from main framework', props);
  render(props);
}
// @ts-ignore
export async function unmount(props) {
  const { container } = props;

  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector('#root')
      : document.querySelector('#root')
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
