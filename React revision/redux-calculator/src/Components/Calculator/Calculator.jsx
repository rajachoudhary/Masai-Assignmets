import React from 'react'
import { useSelector } from 'react-redux'
import { add, divide, product, subtract } from '../../redux/action'
import { store } from '../../redux/store'

export const Calculator = () => {
    const {value} = useSelector(state => state)
    console.log(value)
    const handleAdd = ()=>{
        store.dispatch(add({value}))
    }
    const handleSubtract = ()=>{
        store.dispatch(subtract({value}))
    }
    const handleProduct = ()=>{
        store.dispatch(product({value}))
    }
    const handleDivide = ()=>{
        store.dispatch(divide({value}))
    }
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={handleAdd}>ADD</button>
        <button onClick={handleSubtract}>SUBTRACT</button>
        <button onClick={handleProduct}>PRODUCT</button>
        <button onClick={handleDivide}>DIVIDE</button>

    </div>
  )
}
