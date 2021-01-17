//该文件专门用于暴露store对象，整个应用只有一个store对象
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import countReducer from './reducers/count'

export default createStore(countReducer, applyMiddleware(thunk))