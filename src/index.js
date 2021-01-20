import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import App from './react-extension/App';
// import store from './redux-test/redux/store'
import { BrowserRouter } from 'react-router-dom';

//此处需要用Provider包裹App，目的是让App所有的后代容器组件都能接收到store
// <Provider store={store}>
// </Provider>
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

//监测redux中状态的改变，如redux的状态发生了改变，那么重新渲染App组件
//使用react-redux不需要此步骤
// store.subscribe(() => ReactDOM.render(<App />, document.getElementById('root')))


constructor()
componentWillMount()
render()
componentDidMount()

shouldComponentUpdate()
componentWillUpdate()
render()
componentDidUpdate()

componentWillUnmount()
ReactDOM.unmountComponentAtNode()