import React from "react";
import Fooditem from "./Fooditem";

const Foodlist = ({ foodData, setFoodId }) => {
  return (
    <>
      {foodData.map((food) => (
        <Fooditem key={food.id} food={food} setFoodId={setFoodId} />
      ))}
    </>
  );
};

export default Foodlist;
