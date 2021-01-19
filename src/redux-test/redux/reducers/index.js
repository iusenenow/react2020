//该文件用于汇总所有reducer
import { combineReducers } from 'redux'
import count from './count'
import people from './person';

export default combineReducers({ count, people })