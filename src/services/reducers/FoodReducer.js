
 /*import {
    GET_FOOD_ITEMS,
    GET_FOOD_ITEMS_SUCCESS,
    GET_FOOD_ITEMS_FAIL,
    GET_FOOD_DETAILS,
    GET_FOOD_DETAILS_SUCCESS,
    GET_FOOD_DETAILS_FAIL,
  } from "../actions/fooditems/actionTypes";

  const FoodReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_FOOD_ITEMS:
        state = { ...state, loadingFooditems: true };
        break;
      case GET_FOOD_ITEMS_SUCCESS:
        state = { ...state, fooditems: action.payload, loadingFooditems: false };
        break;
      case GET_FOOD_ITEMS_FAIL:
        state = {
          ...state,
          error: {
            message: "Error",
          },
          loadingFooditems: false,
        };
        break;
      case GET_FOOD_DETAILS:
        state = { ...state, loadingFoodDetails: true };
        break;
      case GET_FOOD_DETAILS_SUCCESS:
        state = { ...state, food: action.payload[0], loadingFoodDetails: false };
        break;
      case GET_FOOD_DETAILS_FAIL:
        state = {
          ...state,
          error: {
            message: "Error",
          },
          loadingFoodDetails: false,
        };
        break;
      default:
        state = { ...state };
        break;
    }
    return state;
  };
  
  export default FoodReducer;*/

  import { createSlice } from '@reduxjs/toolkit'
//import { getFooditemsSuccess } from "../actions/fooditems/actions";

  const initialState = {
    fooditems: [],
    food: {},
    loadingFooditems: false,
    loadingFoodDetails: false,
    error: {
      message: "",
    },
  };
  

const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
     getFoods(state) {
       return state = { ...state, loadingFooditems: true }
     }, 
    getFoodItemsSuccess: (state, action) =>  
      
       state = { ...state, fooditems: action.payload, loadingFooditems: false }
      
    ,
     getFoodItemsFail(state){
      return state = {
        ...state,
        error: {
          message: "Error",
        },
        loadingFooditems: false,
      }
     },
    getFoodDetails(state){
      return state = { ...state, loadingFoodDetails: true };
    },
    getFoodDetailsSuccess(state, action){
     return state = { ...state, food: action.payload[0], loadingFoodDetails: false };
    },
    getFoodDetailsFail(state){
      return state = {
        ...state,
        error: {
          message: "Error",
        },
        loadingFoodDetails: false,
      };
    }
    
    /*increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },*/
  },
})

export const { getFoods, getFoodItemsSuccess, 
  getFoodItemsFail, getFoodDetails,getFoodDetailsSuccess, 
  getFoodDetailsFail  } = foodSlice.actions
const FoodReducer = foodSlice.reducer; 
export default FoodReducer;