import style from "./css/Card.module.css";
const Image = ({ url, title }) => {
  return (
    <>
      <img src={url} alt={title} className={style.pizzaImage} />
    </>
  );
};
export default Image;
