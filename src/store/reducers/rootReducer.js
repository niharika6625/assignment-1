import { combineReducers } from "@reduxjs/toolkit";
import customer from "./customer";
import contract from "./contract";

const rootReducer = combineReducers({
  customer,
  contract,
});

export default rootReducer;
