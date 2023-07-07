import {  configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { characterSlice } from "./slices/character/characterSlice";
import { modalSlice } from "./slices/modal/modalSlice";

export const store = configureStore({
    reducer: {
        character:characterSlice.reducer,
        modal:modalSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;