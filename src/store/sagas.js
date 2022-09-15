import { all, fork } from "redux-saga/effects";

import FoodSaga from "../middlewares/saga/saga";

export default function* rootSaga() {
  yield all([fork(FoodSaga)]);
}