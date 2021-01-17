import { ADD_PERSON } from '../constant';

const initialState = [{ id: 001, name: 'Tom', age: 18 }]

export default function personReducer(preState = initialState, action) {
  const { type, data } = action
  switch (type) {
    case ADD_PERSON:
      [...preState, data]
    default:
      return preState
  }
}