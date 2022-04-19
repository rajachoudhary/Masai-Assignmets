import React from "react";
import style from "../cardContainer.module.css"
export const Card = ({ image, title, description, price }) => {
  return (
    <div className={style.cardContainer}>
      <div className={style.imageContainer}>
        <img src={image} alt="image" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>Price : {price}$</h4>
      </div>
    </div>
  );
};
