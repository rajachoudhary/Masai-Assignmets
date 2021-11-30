import style from "./CSS/Button.module.css"
const Button = ({title}) => {
  return(
    <div>
    <button className={style.button}>{title}</button>
    </div>
  )
}
export default Button