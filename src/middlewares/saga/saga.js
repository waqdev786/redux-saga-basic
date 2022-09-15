import { takeLatest, put, call } from "redux-saga/effects";

import { GET_FOOD_ITEMS, GET_FOOD_DETAILS } from "../../services/actions/fooditems/actionTypes";

import {
  getFoodItemsSuccess,
  getFoodItemsFail,
  getFoodDetailsSuccess,
  getFoodDetailsFail,
} from "../../services/reducers/FoodReducer";

import { getFooditems, getFoodDetails } from "../backend_apis";


function* onGetFooditems() {
  try {
    console.log("Execute onGetFooditems")
    const response = yield call(getFooditems);
    yield put(getFoodItemsSuccess(response));
  } catch (error) {
    yield put(getFoodItemsFail(error.response));
  }
}

function* onGetFoodDetails({ payload: id }) {
  try {
    const response = yield call(getFoodDetails, id);
    yield put(getFoodDetailsSuccess(response));
  } catch (error) {
    yield put(getFoodDetailsFail(error.response));
  }
}

function* FoodSaga() {
  yield takeLatest(GET_FOOD_ITEMS, onGetFooditems);
  yield takeLatest(GET_FOOD_DETAILS, onGetFoodDetails);
}

export default FoodSaga;