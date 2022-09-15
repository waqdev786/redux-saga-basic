import { combineReducers } from "@reduxjs/toolkit";

import FoodReducer from "../services/reducers/FoodReducer";

const rootReducer = combineReducers({
    food: FoodReducer,
});

export default rootReducer;