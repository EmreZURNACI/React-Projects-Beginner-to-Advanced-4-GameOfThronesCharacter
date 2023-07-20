import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    characters: null
}
export const GotSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {
        setCharacters: (state, action) => {
            state.characters = action.payload
        }
    }
})
export default GotSlice.reducer;
export const { setCharacters } = GotSlice.actions