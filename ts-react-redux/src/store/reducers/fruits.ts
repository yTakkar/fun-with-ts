import { Reducer } from 'redux'
import { FruitsState } from '../../types/reducers/fruits';

const initialState = {
  bucket: [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 40 },
    { name: 'mango', price: 200 },
    { name: 'watermelon', price: 90 },
    { name: 'grape', price: 100 },
    { name: 'papaya', price: 500 }
  ]
}

const Fruits: Reducer<FruitsState> = (state = initialState, action) => {
  return state;
}

export default Fruits