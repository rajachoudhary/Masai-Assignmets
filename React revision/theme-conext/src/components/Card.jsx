import React from 'react'
import { ReactComponent as Profile } from "../svg/profile.svg";
import { ReactComponent as Line } from "../svg/line.svg";
import style from "../CSS/card.module.css"
export const Card = () => {
  return (
    <div style={{margin:"20px 0 0 40px",padding:"20px"}} className={style.card}>
      <div>
      <div style={{display:"flex", gap:"8rem",fontFamily:"sans-serif",marginBottom:"20px"}}>
        <div>Active users </div>
        <div>April 2022</div>
      </div>
      <div>
        <div style={{display:"flex", gap:"2rem",fontFamily:"sans-serif",fontSize:"10px"}}>
          <Profile style={{borderRadius:"50%"}}/>
          <div style={{marginTop:"10px"}}>
            <div>Nrupul Dev</div>
            <div style={{color:"GrayText"}}>Banglore, India</div>
          </div>
        </div>
          <Line style={{width:"300px"}}/>
          <div style={{display:"flex",gap:"4rem",padding:"5px 0"}}>
            <div>Professional Level 15</div>
            <div>45875 Points</div>
          </div>
      </div>
      </div>
      <hr />
      <div>
      <div style={{display:"flex", gap:"8rem",fontFamily:"sans-serif"}}>
        <div>Active users </div>
        <div>April 2022</div>
      </div>
      <div>
        <div style={{display:"flex", gap:"2rem",fontFamily:"sans-serif",fontSize:"10px"}}>
          <Profile style={{borderRadius:"50%"}}/>
          <div style={{marginTop:"10px"}}>
            <div>Nrupul Dev</div>
            <div style={{color:"GrayText"}}>Banglore, India</div>
          </div>
        </div>
          <Line style={{width:"300px"}}/>
          <div style={{display:"flex",gap:"4rem",padding:"5px 0"}}>
            <div>Professional Level 15</div>
            <div>45875 Points</div>
          </div>
      </div>
      </div>
      <hr />
      <div>
      <div style={{display:"flex", gap:"8rem",fontFamily:"sans-serif"}}>
        <div>Active users </div>
        <div>April 2022</div>
      </div>
      <div>
        <div style={{display:"flex", gap:"2rem",fontFamily:"sans-serif",fontSize:"10px"}}>
          <Profile style={{borderRadius:"50%"}}/>
          <div style={{marginTop:"10px"}}>
            <div>Nrupul Dev</div>
            <div style={{color:"GrayText"}}>Banglore, India</div>
          </div>
        </div>
          <Line style={{width:"300px"}}/>
          <div style={{display:"flex",gap:"4rem",padding:"5px 0"}}>
            <div>Professional Level 15</div>
            <div>45875 Points</div>
          </div>
      </div>
      </div>
    </div>
  )
}
