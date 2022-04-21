import React,{useContext} from 'react'
import style from "../CSS/dashboard.module.css"
import "../CSS/checkbox.css"
import { Sidebar } from './Sidebar'
import { Card } from './Card'
import { context } from '../context/ThemeContext'
export const Dashboard = () => {
  const {dark,setDark} = useContext(context)
  // console.log(dark)
  const handleButton = (e)=>{
    const {checked} = e.currentTarget
    setDark(checked)
    console.log("raja" ,checked)
  }
  const style1 = {
    backgroundColor:dark?"#1F2327":"white"
  }
  const style2 = {
    color:dark?"white":"#1F2327"
  }
  return (
    <div className={style.container} style={{...style1, ...style2}}>
        <Sidebar/>
        <div >
          <div className={style.dashboardContainer}>
           <div className={style.dashboard}>My Dashboard</div>
            <div>
              <label class="switch" >
                <input type="checkbox"  onChange={handleButton}/>
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          <Card/>
        </div>
    </div>
  )
}
