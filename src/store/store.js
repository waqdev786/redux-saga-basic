/*import { configureStore } from '@reduxjs/toolkit';
import foodReducer from '../services/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: foodReducer,
  },
});*/

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";

import rootReducer from '../store/reducers';
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
  reducer:rootReducer,
  
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
