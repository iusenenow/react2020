//该文件专门用于暴露store对象，整个应用只有一个store对象
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import countReducer from './count_reducer'

export default createStore(countReducer, applyMiddleware(thunk))