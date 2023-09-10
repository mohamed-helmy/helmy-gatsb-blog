import React from "react";
import { Link } from "gatsby";
import "./index.scss";

export const NavbarMainList = () => {
  const location = typeof window !== "undefined" && window.location;
  const { search, pathname, hash } = location;
  const isHome = pathname === "/" && !search && !hash;

  return (
    <div className="navbarItems">
      <Link to="/" className="navbarItem" data-ishome={isHome}>
        Home
      </Link>
      <Link to="/about" className="navbarItem" >
        About
      </Link>
    </div>
  );
};
