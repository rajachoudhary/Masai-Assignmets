import style from "./CSS/Text.module.css"
const Text = ({title}) => {
  return (
    <div className={style.footer}>
      {/* <h3>&#129058</h3> */}
      {/* <i class={"fas fa-arrow-right"}></i> */}
    <div className={style.text}>{title}</div>
    </div>
  )
}
export default Text;