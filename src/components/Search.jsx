import React, { useEffect, useState } from "react";
import style from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const ApiKey = "03b4beb7f6154d83ad95cf737ddef7e9";

const Search = ({ foodData, setFoodData }) => {
  const [query, setQuery] = useState("pasta");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${URL}?query=${query}&apiKey=${ApiKey}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    };
    fetchData();
  }, [query]);

  return (
    <>
      <div className={style.searchContainer}>
        <input
          className={style.input}
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
        />
        {/* <button className={style.searchbtn}>search</button> */}
      </div>
    </>
  );
};

export default Search;
