import { UserState } from "./user";
import { ProfessionState } from "./profession";
import { FruitsState } from "./fruits";

export interface AppState {
  user: UserState,
  profession: ProfessionState,
  fruits: FruitsState
}