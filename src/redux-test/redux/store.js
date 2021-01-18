//该文件专门用于暴露store对象，整个应用只有一个store对象
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import countReducer from './reducers/count'
import personReducer from './reducers/person';

const allReducers = combineReducers({
  he: countReducer,
  rens: personReducer
})


export default createStore(allReducers, applyMiddleware(thunk))