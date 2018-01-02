import { FILTER_FOODS } from "../actions/types";
import Immutable from "seamless-immutable";

const initialState = Immutable({
  foods: []
});

export default(state = initialState, action = {}) => {
  switch (action.type) {
    case FILTER_FOODS:
      return state.merge({
        foods: action.foods
      })
    default:
      return state;
  }
};