import {createSlice} from "@reduxjs/toolkit";

const  messageSlice = createSlice({
    name: "message",
    initialState: 'Enter city name',
    reducers:{
changeMessage(state, action){
   return  state = action.payload;
}
    }
})

export const {changeMessage} = messageSlice.actions;
export default messageSlice.reducer;