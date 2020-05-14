import { combineReducers } from 'redux';
import sidebarShowReducer from './sidebar_show_reducer';

const AllReducer = {
  sidebarShowReducer
};

const RootReducer = combineReducers(AllReducer);

export default RootReducer;
