import { Dispatch } from "redux";

// interface ACase<Type, Args> {
//   (type: Type, ...args: [Args]): { (dispatch: Dispatch, getState: Function): void }
// }

export type ProfessionActionCreator =
  { (type: 'updateProfession', ...args: [string, string, string]): { (dispatch: Dispatch): any } }

export type UserActionCreator = 
  { (type: 'updateName', ...args: [string]): any }