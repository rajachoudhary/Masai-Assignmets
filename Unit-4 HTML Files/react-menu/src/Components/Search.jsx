import style from "./Css/Search.module.css"
const Search = ({title}) => {
  return (
    <>
    <button className={style.searchBtn}>{title}</button>
    </>
  )
}
export default Search