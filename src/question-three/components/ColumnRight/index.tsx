import React from "react";
import Card from "../Card";

import style from "./style.module.scss";

const ColumnRight: React.FC = () => (
  <div className={style.columnRight}>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
);
export default ColumnRight;
