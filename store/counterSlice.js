import { createSlice } from '@reduxjs/toolkit';


const counterSlice = createSlice({
    name: 'count',
    initialState: {
        value: 0,
    },

    reducers: {
        increment: state => {
             state.value += 1;
        },

        decrement: state => {
              state.value -=1 ;
        }
    }

})


export const {increment, decrement} = counterSlice.actions;
export const selectCount = state => state.count.value;

export default counterSlice.reducer;
