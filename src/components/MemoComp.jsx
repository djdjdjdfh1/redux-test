import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMemo, deleteMemo } from '../slices/memoSlice';
import { likeMemo } from '../slices/memoLike';

export default function MemoComp() {
  const memo = useSelector((state)=>(state.memo));
  const [input, setInput] = useState("");

  const like = useSelector((state)=>(state.like));

  const dispatch = useDispatch();

  return (
    <div>
      {
        memo.map((m, index)=>(
          <div key={m.id}>
            <h3>{m.text}</h3>
            <p>{m.date}</p>
            <button onClick={()=>{dispatch(likeMemo({id: m.id, text:m.text, date:"2023-05-16"}))}}>
            {like.find((l)=>(l.id === m.id)) ? "❤" : "🤍"}
            </button>
            <button onClick={()=>{dispatch(deleteMemo(index))}}>X</button>
          </div>
        ))
      }
      <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
      <button onClick={()=>{dispatch(addMemo({text:input, date:"2023-05-16"}))}}>
        추가
      </button>
      {
        like.map((l, index)=>(
          <div key={l.id}>
            <h3>{l.text}</h3>
            <p>{l.date}</p>
          </div>
        ))
      }
    </div>
  )
}
