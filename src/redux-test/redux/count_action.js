//该文件专门为Count组件生成action对象
import { INCREMENT, DECREMENT } from "./count_constant"

//同步action，就是指action的值为object类型的一般对象
export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })
//异步action，就是指action的值为函数
export const createIncrementAsyncAction = (data, time) => {
  return () => {
    
  }
}