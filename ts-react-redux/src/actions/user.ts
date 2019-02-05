import {  UserActionCreator } from "../types/actions";
import types from "../action_types";
import { Dispatch } from "redux";
import { UserSuccess } from "../types/reducers/user";

const UserAction: UserActionCreator = (type, ...args) => (dispatch: Dispatch) => {
  switch (type) {
    case 'updateName': {
      return dispatch<UserSuccess>({
        type: types.USER_SUCCESS,
        payload: { value: args[0] }
      })
    }

    default:
      console.log(`${type} no supported`)
      return
  }
}

export default UserAction
