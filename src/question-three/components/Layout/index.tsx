import React from "react";
import style from "./style.module.scss";

const Layout: React.FC = ({ children }) => {
  return <div className={style.wrapper}>{children}</div>;
};

export default Layout;
