import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/house.svg";
import weight from "../assets/weight.svg";
import profile from "../assets/profile.svg";

const navbar = () => {
  return (
    <nav >
      <ul className="bg-black flex fixed bottom-0 left-0 w-full justify-around h-[50px] items-center">
      <li className="block"> 
      <Link to="/">
        <img src={home} alt="home" className="relative"/>
      </Link>
    </li> 
       <li className="block">
      <Link to="/Browse"><img src={weight} alt=""></img></Link>
    </li>
    <li className="block">
      <Link to="/Profile"><img src={profile} alt=""></img></Link>
    </li> 
    </ul>
    </nav>
  );
};
export default navbar;
