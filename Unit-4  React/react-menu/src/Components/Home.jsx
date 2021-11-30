import style from "./Css/home.module.css"
const Home = ({title}) => {
  return (
    <div>
    <button className={style.homeBtn }>{title}</button>
    </div>
  )
}
export default Home