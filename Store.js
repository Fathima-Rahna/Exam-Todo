
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoReducer';

const store = configureStore(todoReducer);

export default store;
