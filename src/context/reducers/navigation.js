import { OPEN_NAVIGATION } from "../../constants/actionTypes";

// import navigationInitialState from "../initialstates/navigationInitialState";
const navigation = (state, { payload, type }) => {
  //   console.log(state);
  switch (type) {
    case OPEN_NAVIGATION:
      return { ...state, openNavigation: !state.openNavigation };
    default:
      return state;
  }
};

export default navigation;
