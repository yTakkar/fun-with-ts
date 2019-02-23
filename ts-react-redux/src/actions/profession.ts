import { Profession } from "../types/actions";
import types from "../action_types";
import { ProfessionSuccess } from "../types/reducers/profession";
import { Dispatch } from "redux";

const ProfessionAction = (source: string) => (dispatch: Dispatch) => {
  const updateProfession: Profession.UpdateProfession = (designation, company, location) => {
    dispatch<ProfessionSuccess>({
      type: types.PROFESSION_SUCCESS,
      payload: { designation, company, location }
    })
  }

  return {
    updateProfession
  }
}

export default ProfessionAction
