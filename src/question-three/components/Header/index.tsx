import React from "react";
import style from "./style.module.scss";

interface HeaderProps {
  headerItems: any[];
}
const Header = (props: HeaderProps) => {
  const { headerItems } = props;
  return (
    <nav className={style.nav}>
      <ul>
        {headerItems.map((item: any) => (
          <li>
            <a href="#" key={item}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
