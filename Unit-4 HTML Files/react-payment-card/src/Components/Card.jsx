import Date from "./Date";
import Button from "./Button";
import Heading from "./Heading";
import style from "./CSS/Card.module.css";
import Text from "./Text";
const Card = () => {
  return (
    <div className={style.card}>
      <Date
        title={"22/11/2021"}
        url={
          "https://i.pinimg.com/originals/41/84/56/41845673072c6a3467807ea43e60eaf7.png"
        }
        imageName={"Amazon Logo"}
      />
      <Button title={"Case Study"} />
      <Heading title={"Amazon Gift Pay"} />
      <Text title={"Desktop  -  Mobile"} arrow={""} />
    </div>
  );
};
export default Card;
