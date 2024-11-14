import React from "react";
import style from "./fooditem.module.css";
const Fooditem = ({ food, setFoodId }) => {
  return (
    <>
      <div className={style.itemContainer}>
        <img className={style.itemImage} src={food.image} alt="" />
        <div className={style.itemContent}>
          <p className={style.itemName}>{food.title}</p>
        </div>
        <div className={style.btnContainer}>
          <button
            onClick={() => {
              console.log(food.id);
              setFoodId(food.id);
            }}
            className={style.itemBtn}
          >
            View Recipe
          </button>
        </div>
      </div>
    </>
  );
};

export default Fooditem;
