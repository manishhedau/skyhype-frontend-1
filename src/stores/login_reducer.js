import {createSlice} from "@reduxjs/toolkit";

const initialState = {}

const LoginSlice = createSlice({
    name: "userData",
    initialState: initialState,
    reducers: {
        initialGlobalStore: (state, action) => 
        {
            state = action.payload;
            return state;
        }
    }
});

export const {initialGlobalStore} = LoginSlice.actions;
export const LoginReducer = LoginSlice.reducer