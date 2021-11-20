import Image from "./Image"
import Header from "./Header"
import Paragraph from "./Paragraph"
import style from "./css/Card.module.css"
import Detail from "./FoodDetail"
import Button from "./PriceButton"
const Card = () => {
  return(
    <div className={style.container }>
      <Image url="https://wallpaperaccess.com/full/6354760.jpg" alt={"Pizza"}/>
      <Header title={"Pepperoni Pizza"}/>
      <Paragraph title={"Premium Pepporoni and Cheese is made with real mozzerella an original hand-tossed crust"}/>
      <Detail/>
      <Button/>
    </div>
  )
}
export default Card