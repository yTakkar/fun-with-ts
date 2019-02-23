import { User } from "../types/actions";
import types from "../action_types";
import { UserSuccess } from "../types/reducers/user";
import { Dispatch } from "redux";

const UserAction = (source: 'user') => (dispatch: Dispatch) => {
  const updateName: User.UpdateName = value => {
    dispatch<UserSuccess>({ type: types.USER_SUCCESS, payload: { value } })
  }

  const resetName: User.ResetName = payload => dispatch({ type: types.USER_RESET, payload })

  return {
    updateName,
    resetName
  }
}

export default UserAction
