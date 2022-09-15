
 //const GET_FOOD_ITEMS = "GET_FOOD_ITEMS";
 //const GET_FOOD_ITEMS_SUCCESS = "GET_FOOD_ITEMS_SUCCESS";
 //const GET_FOOD_ITEMS_FAIL = "ET_FOOD_ITEMS_FAIL";

 //const GET_FOOD_DETAILS = "GET_FOOD_DETAILS";
 //const GET_FOOD_DETAILS_SUCCESS = "GET_FOOD_DETAILS_SUCCESS";
 //const GET_FOOD_DETAILS_FAIL = "GET_FOOD_DETAILS_FAIL";

 import {
    GET_FOOD_ITEMS,
    GET_FOOD_ITEMS_SUCCESS,
    GET_FOOD_ITEMS_FAIL,
    GET_FOOD_DETAILS,
    GET_FOOD_DETAILS_SUCCESS,
    GET_FOOD_DETAILS_FAIL,
  } from "./actionTypes";

  export const getFoods = () => {
    return {
      type: GET_FOOD_ITEMS,
    };
  };
  
  export const getFooditemsSuccess = (fooditems) => {
    return {
      type: GET_FOOD_ITEMS_SUCCESS,
      payload: fooditems,
    };
  };
  
  export const getFooditemsFail = (error) => {
    return {
      type: GET_FOOD_ITEMS_FAIL,
      payload: error,
    };
  };
  
  export const getFoodDetails = (id) => {
    return {
      type: GET_FOOD_DETAILS,
      payload: id,
    };
  };
  
  export const getFoodDetailsSuccess = (fooditem) => {
    return {
      type: GET_FOOD_DETAILS_SUCCESS,
      payload: fooditem,
    };
  };
  
  export const getFoodDetailsFail = (error) => {
    return {
      type: GET_FOOD_DETAILS_FAIL,
      payload: error,
    };
  };