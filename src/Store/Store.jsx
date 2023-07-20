import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from './GotSLice'
export const store = configureStore({
    reducer: {
        characters: charactersReducer
    }
})