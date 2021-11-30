import style from "./css/Card.module.css";
const Paragraph = ({ title }) => {
  return (
    <>
      <p className={style.paragraph}>{title}</p>
    </>
  );
};
export default Paragraph;
