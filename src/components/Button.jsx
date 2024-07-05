import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css"
import { render } from "react-dom";

class Button extends React.Component {
    render(){
  return (
    <NavLink to={`/program/${this.props.programId}/workout/${this.props.workoutId}/${this.props.day}/${this.props.exercise}`}>
<button className="rose rounded-3xl py-2 px-6"> 
        <p className="text-black">{this.props.text}</p>
    </button>
    </NavLink>
  );
}
};
export default Button;
