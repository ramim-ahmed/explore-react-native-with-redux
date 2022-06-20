import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import themeReducer from './themeSlice';


//create reducer
const rootReducer = combineReducers({
    count: counterReducer,
    theme: themeReducer,
})


//create store 
const store = configureStore({
    reducer: rootReducer,
})

export default store;