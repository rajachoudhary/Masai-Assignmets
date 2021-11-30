import style from "./Css/Join.module.css"

const JoinUs = ({title}) => {
  return (
    <div>
    <button className={ style.joinBtn}>{title}</button>
    </div>
  )
}
export default JoinUs