import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from "../CSS/circle.module.css"
import { getColor } from '../Redux/action'
export const Circles = () => {
  const dispatch = useDispatch()
  let arr = []
  const randomColor = useSelector(state => state.randomColor)

  let Color = () => {
    for (let i = 1; i < 6; i++) {
      let backgroundColor = "#" + Math.floor(Math.random()*9999999).toString(16)
      arr.push({backgroundColor,id:i})
    }
  }
  
  
  
  useEffect(()=>{
    Color()
    dispatch(getColor(arr))
  },[])
  return (
    <div className={style.circleContainer}>
        {
          randomColor.map((items)=>{
            return(
              <div style={{backgroundColor:items.backgroundColor}} key={items.id}></div>
            )
          })
        }
    </div>
  )
}
