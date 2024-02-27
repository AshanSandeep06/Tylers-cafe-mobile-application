import { configureStore } from '@reduxjs/toolkit';
import React from 'react'
import { View } from 'react-native';
import { globalSliceReducer } from '../slices/FavoriteMealsSlice';

// Redux Store
const Store = configureStore({
  // Define reducers
    reducer: {
      favoriteMeals: globalSliceReducer
    }
});

export default Store;