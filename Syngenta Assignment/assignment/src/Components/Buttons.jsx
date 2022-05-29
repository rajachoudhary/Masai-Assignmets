import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from "../CSS/buttons.module.css"
import { getCircle, getColor } from '../Redux/action'

export const Buttons = () => {
  const [circleId,setCircleId] = React.useState([])
  const dispatch = useDispatch()
  const randomColor = useSelector(state => state.randomColor)
  const handleShoot = ()=>{
    let [movingCircle] = randomColor.filter((item)=>item.id === +circleId)
    let removingCircleFromParent = randomColor.filter((item)=>item.id != +circleId)
    dispatch(getColor(removingCircleFromParent))
    dispatch(getCircle(movingCircle))
  }
  return (
    <div className={style.buttonsContainer}>
        <label>
            <input type="text" placeholder="1 to 5" onChange = {(e)=>setCircleId(e.target.value)}/>
            <button onClick={handleShoot}>Shoot</button>
        </label>
    </div>
  )
}
