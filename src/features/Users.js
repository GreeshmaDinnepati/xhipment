import { createSlice } from '@reduxjs/toolkit';
import { userData } from '../fakeData';

const userSlice = createSlice({
    name : 'users',
    initialState : {value : userData},
    reducers:{
            //code for adding user
        adduser : (state , action) =>{
            state.value.push(action.payload)
        },
        deleteuser : (state,action) => {
            state.value = state.value.filter((user)=> user.no !== action.payload.no)
        },
        updateusername : (state,action) => {
            state.value.map((user)=>{
                if(user.no === action.payload.no){
                    user.name = action.payload.name
                }
            })
        }
    }
});

export const { adduser, deleteuser,updateusername } = userSlice.actions;
export default userSlice.reducer;