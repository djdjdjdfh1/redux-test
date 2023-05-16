import { createSlice } from '@reduxjs/toolkit'

export const memoLike = createSlice({
    name : "like",
    initialState : [],
    reducers : {
        likeMemo : (state, action) => {
            if( state.find((l)=>(l.id === action.payload.id)) ) {
                return state.filter((l)=>(l.id !== action.payload.id))
            } else {
                const newLike = {
                    ...action.payload,
                }
                state.push(newLike);
            }
        }
    }
})

export const {likeMemo} = memoLike.actions
export default memoLike.reducer