import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css"
import { render } from "react-dom";

class Button extends React.Component {
    render(){
  return (
    <button className="rose rounded-3xl py-2 px-6"> 
        <p className="text-black">{this.props.text}</p>
    </button>
  );
}
};
export default Button;
