import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/app_reducer";

import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  SET_DARK_MODE,
  SET_LIGHT_MODE,
} from "../actions";

const initialState = {
  isSidebarOpen: false,
  isDarkMode: false,
};
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setDarkMode = () => {
    dispatch({ type: SET_DARK_MODE });
  };
  const setLightMode = () => {
    dispatch({ type: SET_LIGHT_MODE });
  };
  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };
  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };
  return (
    <AppContext.Provider
      value={{ ...state, setDarkMode, setLightMode, openSidebar, closeSidebar }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
