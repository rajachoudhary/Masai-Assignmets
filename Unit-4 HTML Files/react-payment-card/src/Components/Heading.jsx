import style from "./CSS/CompanyHeading.module.css" 
const Heading= ({title}) => {
return(
  <>
  <h1 className={style.companyName}>{title}</h1>
  </>
)
}
export default Heading