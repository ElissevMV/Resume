import {createSlice} from '@reduxjs/toolkit';


export const rpsSlice = createSlice({
    name : 'rps',
    initialState : {
        player1 : '',
        number : 0
    },
    reducers : {
        twoPlayers: (state, data) =>{           
          state.player1 = data.payload;
        },
        numPlus: (state, data) =>{
            state.number = data.payload + 1;
        }
    }
});

export const {twoPlayers, numPlus} = rpsSlice.actions;
export const selectRps = state => state.rps;
export const selectNumber = state => state.rps.number;
export default rpsSlice.reducer;
