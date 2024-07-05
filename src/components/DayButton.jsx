import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";

import GET_PROGRAM from "../queries/program";

class Button extends React.Component {
    // for (let i = 0; i < parseInt(this.props.i); i++) {
      // console.log(this.props.i)
      render(){
      return (
        <>
        <ul >
        <li >
          <NavLink className="h-[100px] flex w-full rounded-3xl bg-medium mb-3"
            to={`/program/${this.props.programId}/workout/${this.props.workoutId}/${this.props.day}`}
          >
          <div className="w-[26.6%] h-full rounded-l-3xl  rose"></div>
          <div>
            <h3 className="text-left pl-3 pt-3 pb-4 ">Tag {this.props.day}</h3>
            <p className="pl-3 text-sm text-left leading-4">
              {this.props.duration} Min. ·<br />
              Beweglichkeit{" "}
            </p>
          </div>
          </NavLink>
        </li>
      </ul>
        
        </>
        
      );
    }
    }
  //   Button.defaultProps = {
  //     i: 1,
  //   };
  // }

export default Button;
