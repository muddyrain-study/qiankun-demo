import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  MicroAppStateActions,
  initGlobalState,
  registerMicroApps,
  start,
} from 'qiankun';
import { BrowserRouter } from 'react-router-dom';

const state = {
  nickname: 'muddyrain',
  age: 18,
};

const actions: MicroAppStateActions = initGlobalState(state);
actions.onGlobalStateChange((state, prev) => {
  console.log('父', state, prev);
});

setTimeout(() => {
  actions.setGlobalState({
    ...state,
    age: 19,
  });
}, 2000);
registerMicroApps([
  {
    name: 'app1',
    entry: '//localhost:3011',
    container: '#app1',
    activeRule: '/app1',
    props: {
      ...state,
    },
  },
  {
    name: 'app2',
    entry: '//localhost:3012',
    container: '#app2',
    activeRule: '/app2',
    props: {
      nickname: 'muddyrain1',
    },
  },
  {
    name: 'app3',
    entry: '//localhost:8888',
    container: '#app3',
    activeRule: '/app3',
    props: {
      nickname: 'muddyrain1',
    },
  },
  {
    name: 'vite',
    entry: '//localhost:5173',
    container: '#app4',
    activeRule: '/app4',
  },
]);
// 启动 qiankun
start();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
