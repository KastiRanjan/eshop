import React, { createContext, useReducer } from "react";
import navigationInitialState from "./initialstates/navigationInitialState";
import navigation from "./reducers/navigation";

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [navigationState, navigationDispatch] = useReducer(navigation, navigationInitialState);
  return (
    <HeaderContext.Provider value={{ navigationState, navigationDispatch }}>
      {children}
    </HeaderContext.Provider>
  );
};
