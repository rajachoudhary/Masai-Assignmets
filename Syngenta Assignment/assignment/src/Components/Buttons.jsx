import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../CSS/buttons.module.css";
import { getCircle, getColor } from "../Redux/action";

export const Buttons = () => {
  const [circleId, setCircleId] = React.useState("");
  const dispatch = useDispatch();
  const movingShapes = useSelector(state => state.movingShapes)
  const randomColor = useSelector((state) => state.randomColor);
  
  const handleShoot = () => {
    //checking if the current circle id is present  or not 
    let flag = false 
    let checkingcircle = movingShapes.filter((item) => {
      if(item.id === +circleId){
        flag = true
      } else {
        flag = false
      }
    })

    
    if (+circleId < 6 && flag === false && +circleId > 0) {
      let [movingCircle] = randomColor.filter((item) => item.id === +circleId);
      dispatch(getCircle(movingCircle));
      setCircleId(" ")
    }
     else if (flag === true){
      alert(circleId + " " + "no circle is already present in the box")
    } 
    else {
      alert("Please type between 1 to 5");
    }

    let removingCircleFromParent = randomColor.filter(
      (item) => item.id !== +circleId
    );
    dispatch(getColor(removingCircleFromParent));
  };

  return (
    <div className={style.buttonsContainer}>
      <label>
        <input
          type="text"
          placeholder="1 to 5"
          value= {circleId}
          onChange={(e) => setCircleId(e.target.value)}
        />
        <button onClick={handleShoot}>Shoot</button>
      </label>
    </div>
  );
};
