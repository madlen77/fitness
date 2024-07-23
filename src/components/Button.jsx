import React from "react";
import { NavLink } from "react-router-dom";

function Button({ workoutId, exercise, text, onClick }) {
  if (text === "los!") {
    return (
      <NavLink
        to={`/workout/${workoutId}/${exercise}`}
      >
        <button className="rose rounded-3xl py-2 px-6">
          <p className="text-black">{text}</p>
        </button>
      </NavLink>
    );
  } else if (text === "registrieren") {
    return (
      <NavLink to={`/Register`}>
        <button className="rose rounded-3xl py-2 px-6">
          <p className="text-black">{text}</p>
        </button>
      </NavLink>
    );
  } else {
    return (
      <button
        type="submit"
        className="rose rounded-3xl py-2 px-6"
        onClick={onClick}
      >
        <p className="text-black">{text}</p>
      </button>
    );
  }
}
export default Button;
