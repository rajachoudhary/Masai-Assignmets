import style from "./css/Card.module.css";
const Header = ({ title }) => {
  return (
    <div className={style.headerPart}>
      <h1 className={style.headerSize}>{title}</h1>
    </div>
  );
};
export default Header;
