import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
   name: "chat",
   initialState: {
      messages: [], // Change to 'messages' to match the LiveChat component
   },
   reducers: {
      addMessage: (state, action) => {
        if(state.messages.length)
            state.messages.splice(15,1);
         state.messages.unshift(action.payload);
      },
   },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
