import { Reducer } from 'redux'
import types from '../../action_types';
import { ProfessionState, ProfessionAction } from '../../types/reducers/profession';

const initialState = {
  designation: 'Software Engineer',
  company: 'Shaadi.com',
  location: 'Tardeo, Mumbai'
}

const User: Reducer<ProfessionState, ProfessionAction> = (state = initialState, action) => {
  switch(action.type) {
    case types.PROFESSION_SUCCESS: {
      const { designation, company, location } = action.payload
      return {
        designation,
        company,
        location
      }
    }

    default:
      return state
  }
}

export default User