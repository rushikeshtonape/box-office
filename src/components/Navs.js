import React from "react";
import { useLocation } from "react-router-dom";

import { LinkStyled, NavList } from "./Navs.styled";

const LINKS = [
  { to: "/", text: "Home" },
  { to: "/starred", text: "starred" },
];

const Navs = () => {
  const location = useLocation();

  console.log(location);
  return (
    <NavList>
      {LINKS.map((items) => (
        <li key={items.to}>
          {" "}
          <LinkStyled
            to={items.to}
            className={items.to === location.pathname ? "active" : ""}
          >
            {items.text}
          </LinkStyled>
        </li>
      ))}
    </NavList>
  );
};

export default Navs;
