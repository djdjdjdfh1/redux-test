import { createSlice } from '@reduxjs/toolkit'

let id = 2;

export const memoSlice = createSlice({
    name : "memo",
    initialState : [
        {
            id : 1,
            text : "메모입니다",
            date : "20-05-16"
        }
    ],
    reducers : {
        addMemo : (state, action) => {
            const newMemo = {
                ...action.payload,
                id : id,
            }
            id++;
            state.push(newMemo)
        },
        deleteMemo : (state, action) => {
            state.splice(action.payload,1)
        }
    }
})

export const { addMemo, deleteMemo } = memoSlice.actions
export default memoSlice.reducer