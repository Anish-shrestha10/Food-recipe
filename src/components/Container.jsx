import React from "react";
import style from "./container.module.css";

const Container = ({ children }) => {
  return (
    <>
      <div className={style.containercss}>{children}</div>
    </>
  );
};

export default Container;
