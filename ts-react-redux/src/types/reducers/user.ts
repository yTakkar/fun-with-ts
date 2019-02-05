import types from "../../action_types";

// STATE
export interface UserState {
  name: string,
  location: {
    city: string,
    country: string
  }
}

// ACTIONS
export interface UserSuccess {
  type: types.USER_SUCCESS,
  payload: {
    value: string
  }
}

export interface UserRequest {
  type: types.USER_REQUEST,
  payload: Object
}

export type UserAction = UserSuccess | UserRequest