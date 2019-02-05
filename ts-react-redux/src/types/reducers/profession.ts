import types from "../../action_types";

// STATE
export interface ProfessionState {
  designation: string,
  company: string,
  location: string
}

// ACTIONS
export interface ProfessionSuccess {
  type: types.PROFESSION_SUCCESS,
  payload: {
    designation: string,
    company: string,
    location: string,
  }
}

export type ProfessionAction = ProfessionSuccess