import { createSlice } from '@reduxjs/toolkit';

const FavoriteMealsSlice = createSlice({
    name: "favorite",
    initialState: {
        ids: [],
        checkoutPrice: 0
    },
    reducers: {
        addFavorite: (state, action) => {
            state.ids.push(action.payload);
        },

        removeFavorite: (state, action) => {
            const idToRemove = action.payload;
            state.ids = state.ids.filter(id => id !== idToRemove);
        },

        removeAllFavorites: (state) => {
          state.ids = [];
        },

        setCheckoutPrice: (state, action) => {
            state.checkoutPrice = action.payload;
        },
    }
});

export const globalSliceReducer = FavoriteMealsSlice.reducer;
export const { addFavorite, removeFavorite, removeAllFavorites, setCheckoutPrice } = FavoriteMealsSlice.actions;