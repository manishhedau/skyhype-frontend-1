import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    spotlight: {
        title: "",
        url: ""
    }
 }

const spotlightSlice = createSlice({
    name: 'spotlight',
    initialState: initialState,

    reducers: {
        initializeSpotlight: (state, action) => {
            state.spotlight = action.payload;
        },

        updateSpotlight: (state, action) => {
            state.spotlight.spotlight = action.payload
        },
    }
})

export const {initializeSpotlight, updateSpotlight} = spotlightSlice.actions;
export const SpotlightReducer = spotlightSlice.reducer;