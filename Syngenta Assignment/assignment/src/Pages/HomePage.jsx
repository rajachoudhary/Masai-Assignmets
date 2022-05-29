import React from 'react'
import { Buttons } from '../Components/Buttons'
import { Circles } from '../Components/Circles'
import { DataContainer } from '../Components/DataContainer'
import style from "../CSS/homePage.module.css"

export const HomePage = () => {
  return (
    <div>
      <Circles/>
      <div className={style.container}>
        <DataContainer/>
        <Buttons/>
      </div>
    </div>
  )
}
