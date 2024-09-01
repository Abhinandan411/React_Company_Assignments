// store.js
import { configureStore } from '@reduxjs/toolkit';
import warehouseReducer from './slice'; // Import the reducer function from slice.js

export const store = configureStore({
  reducer: {
    warehouses: warehouseReducer, // Use the reducer function here
  },
});