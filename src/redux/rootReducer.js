import { combineReducers } from "redux";
import inventoryReducer from "./inventory/inventoryReducer";

const rootReducer = combineReducers({inventory: inventoryReducer});

export default rootReducer;