import React from 'react'
import { ReactComponent as Profile } from "../svg/profile.svg";
import { ReactComponent as Path } from "../svg/path.svg";
import { ReactComponent as Shopping } from "../svg/shopping.svg";
import { ReactComponent as Message } from "../svg/message.svg";
import { ReactComponent as File } from "../svg/file.svg";
import { ReactComponent as Setting } from "../svg/setting.svg";
import { GoGraph } from 'react-icons/go';
import { AiFillPlusCircle } from 'react-icons/ai';
import style from "../CSS/sidebar.module.css"
export const Sidebar = () => {
  return (
    <div className={style.sidebar}>
        <Profile className={style.profile}/> 
        <GoGraph/>
        <Path/>
        <Shopping/>
        <Message/>
        <File/>
        <Setting/>
        <AiFillPlusCircle className={style.plus}/>
    </div>
  )
}
