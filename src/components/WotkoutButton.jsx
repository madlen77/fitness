import React from "react";
import { NavLink } from "react-router-dom";

class Workout extends React.Component {
  render() {
    if (this.props.text === "") {
      return (
        <ul>
          <li className="flex justify-evenly">
            <NavLink
              to="/Browse"
              className="rounded-[2.5rem] bg-medium w-11/12 h-[13.5rem] mt-5"
            >
              <h3 className="mt-20 ml-14">
                Bitte starte zu erst ein Program
              </h3>
            </NavLink>
          </li>
        </ul>
      );
    } else {
      return(
        <ul >
        <li className="flex justify-evenly">
          <NavLink
            to={this.props.link}
            className="rounded-[2.5rem] w-11/12 h-[13.5rem] mt-5 flex items-center justify-center "
          >
            <p>
              {this.props.text}
            </p>
          </NavLink>
        </li>
      </ul>
      )
      

    }
  }
}

export default Workout;
