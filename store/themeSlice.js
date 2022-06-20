import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        mode: 'light'
    },
    reducers: {
        toggleMode: (state, action) => {
            state.mode = action.payload
        }
    }
})

export const {toggleMode} = themeSlice.actions;
export const themeSelector = state => state.theme.mode;
export default themeSlice.reducer;