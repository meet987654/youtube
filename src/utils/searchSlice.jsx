import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search",
    initialState:{
        query:"",
    },
    reducers:{
        setSearchQuery: (state, action) => {
            state.query = action.payload;
          },
        cacheResults:(state,action)=>{
            state = Object.assign(state,action.payload);
        },
    },
})

export const {setSearchQuery,cacheResults} =searchSlice.actions;
export default searchSlice.reducer