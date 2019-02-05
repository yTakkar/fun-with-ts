import { Reducer } from 'redux'
import types from '../../action_types';
import { UserState, UserAction } from '../../types/reducers/user';

const initialState = {
  name: 'Faiyaz',
  location: {
    city: 'Mumbai',
    country: 'India'
  }
}

const User: Reducer<UserState, UserAction> = (state = initialState, action) => {
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
