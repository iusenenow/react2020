import React from 'react';
import ReactDOM from 'react-dom';
import App from './redux-test/App';
import store from './redux-test/redux/store';

ReactDOM.render(<App />, document.getElementById('root'))

store.subscribe(() => ReactDOM.render(<App />, document.getElementById('root')))