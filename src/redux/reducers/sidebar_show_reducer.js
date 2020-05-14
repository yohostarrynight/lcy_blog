import { ADD_SIDEBARSHOW } from '../actions/sidebar_show_actions';

const sidebarShowState = {
  sidebarshow: true
};

const sidebarShowReducer = (state = sidebarShowState, action) => {
  switch (action.type) {
    case ADD_SIDEBARSHOW:
      return { ...state, sidebarshow: action.sidebarshow };
    default:
      return state;
  }
};

export default sidebarShowReducer;
