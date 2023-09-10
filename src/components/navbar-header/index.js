import React from "react";
import "./index.scss";
import { Menu } from "../menu";
import useBreakpoint from "../../hooks/useBreakpoint";
import Profile from "../profile";

export const NavbarHeader = ({ showMenu, setShowMenu, blogName }) => {
  const brkPnt = useBreakpoint();
  const smallScreen = brkPnt === "md" || brkPnt === "sm";
  
  return (
    <div className="navbarHeader">
      {smallScreen ? (
        <Menu setShowMenu={setShowMenu} showMenu={showMenu} />
      ) : (
        <Profile></Profile>
      )}
    </div>
  );
};
