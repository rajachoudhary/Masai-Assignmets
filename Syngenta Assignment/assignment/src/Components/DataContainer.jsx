import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from "../CSS/dataContainer.module.css"
import { getColor, removeCircle } from '../Redux/action'

export const DataContainer = () => {
    const dispatch = useDispatch()
    const movingShapes = useSelector(state => state.movingShapes)
    const randomColor = useSelector(state => state.randomColor)
    
    const handleCircle = (id) =>{
       let storingCircle = movingShapes.filter((items)=> items.id === id)
       let data = [...storingCircle,...randomColor]
       let updateMovingCircle = movingShapes.filter((items)=> items.id != id)
        dispatch(getColor(data))
        dispatch(removeCircle(updateMovingCircle))
    }

  return (
    <div className={style.DataContainer}>
        {
            movingShapes.map((items)=>{
                return(
                    <div key={items.id} style={{backgroundColor:items.backgroundColor}} onClick={() =>handleCircle(items.id)}></div>
                )
            })
        }
    </div>
  )
}
