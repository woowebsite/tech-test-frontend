import React from "react";
import style from "./style.module.scss";

const Card = ({ name, no, location, start, time }: any) => {
  return (
    <div className={`${style.card} card`}>
      <h5 className={style.title}>
        {name} {no && <span>(Job #{no})</span>}
      </h5>
      <p>{location}</p>
      <p>{start}</p>
      <p>{time}</p>
      <div className={`${style.count} count`}>
        {Math.floor(Math.random() * 10)}
      </div>
    </div>
  );
};

export default Card;
