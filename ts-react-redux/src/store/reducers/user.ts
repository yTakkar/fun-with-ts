import { Reducer } from 'redux'
import { UserState } from '../../types/reducers';
import types from '../action_types';

const initialState = {
  name: 'Faiyaz',
  location: {
    city: 'Mumbai',
    country: 'India'
  }
}

const User: Reducer<UserState> = (state = initialState, action) => {
  switch(action.type) {
    case types.USER_SUCCESS: 
      return { ...state, name: action.payload.value }
    
    case types.USER_REQUEST: 
      return { ...state, ...action.payload }
     
    default: 
      return state
  }
}

export default User
