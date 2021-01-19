import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './redux-test/App';
import store from './redux-test/redux/store'

ReactDOM.render(
  //此处需要用Provider包裹App，目的是让App所有的后代容器组件都能接收到store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

//监测redux中状态的改变，如redux的状态发生了改变，那么重新渲染App组件
//使用react-redux不需要此步骤
// store.subscribe(() => ReactDOM.render(<App />, document.getElementById('root')))