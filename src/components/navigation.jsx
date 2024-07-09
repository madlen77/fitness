import React from "react";
import { NavLink } from "react-router-dom";
import home from "../assets/house.svg";
import profile from "../assets/weight.svg";
import weight from "../assets/profile.svg";

const navbar = () => {
  return (
    <nav>
      <div className="h-[50px]"></div>
      <ul className="bg-black flex fixed bottom-0 left-0 w-full justify-around h-[50px] items-center">
        <li className="block">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <img src={home} alt="home" className="relative" />
          </NavLink>
        </li>
        <li className="block">
          <NavLink
            to="/Browse"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <img src={weight} alt=""></img>
          </NavLink>
        </li>
        <li className="block">
          <NavLink
            to="/Profile"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <img src={profile} alt=""></img>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default navbar;
