import React from "react";
import { NavLink } from "react-router-dom";

function Button({ workoutId, day, programId, duration }) {

  return (
    <>
      <ul>
        <li>
          <NavLink
            className="h-[100px] flex w-full rounded-3xl bg-medium mb-3"
            to={`/program/${programId}/workout/${workoutId}/${day}`}
          >
            <div className="w-[26.6%] h-full rounded-l-3xl  rose"></div>
            <div>
              <h3 className="text-left pl-3 pt-3 pb-4 ">Tag {day}</h3>
              <p className="pl-3 text-sm text-left leading-4">
                {duration} Min. ·<br />
                Beweglichkeit{" "}
              </p>
            </div>
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Button;
