import React, { useEffect, useState } from "react";
import style from "./fooddetail.module.css";
import Itemlist from "./Itemlist";
const FoodDetails = ({ foodId }) => {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const Apikey = "03b4beb7f6154d83ad95cf737ddef7e9";
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchFood = async () => {
      const res = await fetch(`${URL}?apiKey=${Apikey}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    };
    fetchFood();
  }, [foodId]);
  return (
    <>
      <div className={style.container}>
        <div>
          <p className={style.name}>{food.title}</p>
          <img className={style.image} src={food.image} />
        </div>
        <div className={style.itemdecs}>
          <span>
            <strong>Ready time:{food.readyInMinutes}</strong>
          </span>
          <span>
            <strong>{!food.vagen ? "vagen" : ""}</strong>
          </span>
          <span>
            <strong>
              {!food.vegetarian ? "Vegetarian" : "Non-Vegetarian"}
            </strong>
          </span>
        </div>
        <div className={style.itemdecs}>
          <span>
            <strong>Serves: {food.servings}</strong>
          </span>
          <span>
            <strong>Price Per Serving: {food.pricePerServing}</strong>
          </span>
        </div>
        <Itemlist food={food} isLoading={isLoading} />
        <div className={style.iteminstruction}>
          <h2>Instruction</h2>
          <ol>
            {isLoading
              ? "Loading..."
              : food.analyzedInstructions[0].steps.map((step) => (
                  <li>{step.step}</li>
                ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default FoodDetails;
