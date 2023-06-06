import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    test:'it works'
}

const testReducer = createSlice({
    name:'test',
    initialState,
    reducers:{
        test(state:typeof initialState){
            console.log(state.test)
        }
    }
})

export const {test} = testReducer.actions;
export default testReducer.reducer