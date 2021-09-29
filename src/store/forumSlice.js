import {createSlice} from '@reduxjs/toolkit';


export const forumSlice = createSlice({
    name : 'forum',
    initialState : {
        allMessages : []
    },
    reducers : {
      addMassages: (state, data) => {
          if (data.payload[0].length === 0) {
            data.payload[0] = 'Аноним';
            state.allMessages.push(data.payload);
          }
          else state.allMessages.push(data.payload);
      }
      
    }
});

export const {addMassages} = forumSlice.actions;
export const selectForum = state => state.forum.allMessages;
export default forumSlice.reducer;