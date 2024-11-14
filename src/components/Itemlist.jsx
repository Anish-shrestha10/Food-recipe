import React from "react";
import style from "./itemlist.module.css";
const Itemlist = ({ food, isLoading }) => {
  return (
    <>
      <h2 className={style.name}>Ingredients</h2>
      <div className={style.itemcontainer}>
        {isLoading
          ? "Loading..."
          : food.extendedIngredients.map((item) => (
              <div className={style.container}>
                <div className={style.imageconatiner}>
                  <img
                    className={style.image}
                    src={
                      `https://spoonacular.com/cdn/ingredients_100x100/` +
                      item.image
                    }
                  />
                </div>
                <div>
                  <p>{item.name}</p>
                  <p>
                    {item.amount}
                    {item.unit}
                  </p>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default Itemlist;
