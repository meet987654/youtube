import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        showSidebar:true,
    },
    reducers:{
        toggleSidebar:(state)=>{
           state.showSidebar=!state.showSidebar;
        },
        hideSideBar:(state)=>{
            state.showSidebar=false;
        }
    }
}
)

export const {toggleSidebar,hideSideBar}=appSlice.actions;
export default appSlice.reducer;