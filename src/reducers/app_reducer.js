import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  SET_DARK_MODE,
  SET_LIGHT_MODE,
} from "../actions";

const reducer = (state, action) => {
  if (action.type === SET_DARK_MODE) {
    return { ...state, isDarkMode: true };
  }
  if (action.type === SET_LIGHT_MODE) {
    return { ...state, isDarkMode: false };
  }
  if (action.type === OPEN_SIDEBAR) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === CLOSE_SIDEBAR) {
    return { ...state, isSidebarOpen: false };
  }

  throw new Error(`No action type matching: ${action.type}`);
};

export default reducer;
