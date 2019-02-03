import { Action } from 'redux'
import { ProfessionState } from '../../types/reducers';

const initialState = {
  designation: 'Software Engineer',
  company: 'Shaadi.com',
  location: 'Tardeo, Mumbai'
}

const User = (state: ProfessionState = initialState, action: Action): ProfessionState => {
  return state
}

export default User