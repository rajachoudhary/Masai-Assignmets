import React from 'react'
import {  decrement, increment } from '../../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../redux/store'

export const Counter = () => {
    const {count} = useSelector(state => state)
    const dispatch = useDispatch()
    const handleIncremet = ()=>{
        store.dispatch(increment(1))
    }
    const handleDecremet = ()=>{
      store.dispatch(decrement(1))
    }
  return (
    <>
    <div>{count}</div>
    <button onClick={handleIncremet}>Increment</button>
    <button onClick={handleDecremet}>Increment</button>
    </>
  )
}
