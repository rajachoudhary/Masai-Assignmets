import style from "./CSS/Logo.module.css"
const Date = ({ title, url, imageName }) => {
  return (
    <div id={style.logo}>
      <div>{title}</div>
      <img src={url} alt={imageName}/>
    </div>
  );
};
export default Date;
