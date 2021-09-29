import {createSlice} from '@reduxjs/toolkit';
import itemArr from '../data/items.json';

export const choiceSlice = createSlice({
    name : 'choice',
    initialState : {
        choice : itemArr,
        cart : [],
        sum : 0,
    },
    reducers : {
        addInCart : (state, data) =>{
            let bool = 0;
            if(state.cart.length == 0) {
                bool = 1;
                state.cart.push(data.payload);
            }
            else {
                for (let i of state.cart){
                    if (i[1] == data.payload[1]){
                        bool = 1;
                        i[3] = i[3] + data.payload[3];
                    }
                }
            }
            if (bool == 0) state.cart.push(data.payload);
            state.sum = state.sum + data.payload[2]*data.payload[3];
        }
    }
});

export const {addInCart} = choiceSlice.actions;
export const selectItem = state => state.item.choice;
export const selectCart = state => state.item.cart;
export const selectSum = state => state.item.sum;
export default choiceSlice.reducer;
