import React from "react";
import { NavLink } from "react-router-dom";

class Workout extends React.Component {
  render() {
    const id = this.props.link;
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
    } else if (typeof this.props.day !== 'undefined' ) {
      return(
        <ul>
          <li className="flex justify-evenly">
            <NavLink
              to="/Browse"
              className="rounded-[2.5rem] bg-medium w-11/12 h-[13.5rem] mt-5"
            >
              <h3 className="mt-24 ml-10">Tag {this.props.day}</h3>
              <h2 className="ml-10 text-white">{this.props.text}</h2>
              <p className="ml-10 text-sm">{this.props.time} Min. · {this.props.target}</p>
            </NavLink>
          </li>
        </ul>
      );
    } else{
      return(
        <ul >
        <li className="flex justify-evenly">
          <NavLink
            to={`/program/${id}`}
            className={this.props.style}
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
