import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState:{
        isMenuOpen:false,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen = false;
        },
        setSearchResults: (state, action) => { // Add this reducer
            state.searchResults = action.payload;
        },
    }
});

export const { toggleMenu , closeMenu , setSearchResults } = appSlice.actions;
export default appSlice.reducer;