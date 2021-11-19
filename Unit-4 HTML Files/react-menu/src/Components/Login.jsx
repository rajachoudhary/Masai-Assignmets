import style from "./Css/Login.module.css"
const Login = ({title}) => {
  return (
    <div>
    <button className={style.loginBtn}>{title}</button>
    </div>
  )
}
export default Login