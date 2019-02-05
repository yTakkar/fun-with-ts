import { ProfessionActionCreator } from "../types/actions";
import types from "../action_types";
import { ProfessionSuccess } from "../types/reducers/profession";

const ProfessionAction: ProfessionActionCreator = (type, ...args) => dispatch => {
  switch(type) {
    case 'updateProfession': {
      const [designation, company, location] = args;
      return dispatch<ProfessionSuccess>({
        type: types.PROFESSION_SUCCESS,
        payload: { designation, company, location }
      })
    }

    default:
      console.log(`${type} no supported`)
      return
  }
}

export default ProfessionAction
