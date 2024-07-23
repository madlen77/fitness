import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DayContext, ProgramContext, WorkoutContext } from "../main";

function Workout({ link, text, style }) {

  function findCategory(target){
    if (target === "weightTraining")
      return "Krafttraining"
    else if (target === "coordination")
      return "Koordination"
    else if (target === "cardio")
      return "Cardio" 
    else if (target === "mobility")
      return "Beweglichkeit"   
  }

  if (link) {
    return (
      <ul>
        <li className="flex justify-evenly">
          <NavLink to={`/program/${link}`} className={style}>
            <p>{text}</p>
          </NavLink>
        </li>
      </ul>
    );
  }
  
  const currentDay = useContext(DayContext).currentDay;
  if (currentDay === null) {
    return (
      <ul>
        <li className="flex justify-evenly">
          <NavLink
            to="/Browse"
            className="rounded-[2.5rem] bg-medium w-11/12 h-[13.5rem] mt-5"
          >
            <h3 className="mt-20 ml-14">Bitte starte zuerst ein Program</h3>
          </NavLink>
        </li>
      </ul>
    );
  } else {
    
  const currentProgram = useContext(ProgramContext).currentProgram.name;
  const time = useContext(WorkoutContext).currentWorkout.duration
  const target = useContext(WorkoutContext).currentWorkout.category
    return (
      <ul>
        <li className="flex justify-evenly">
          <NavLink
            to="/Browse"
            className="rounded-[2.5rem] bg-medium w-11/12 h-[13.5rem] mt-5"
          >
            <h3 className="mt-24 ml-10">Tag {currentDay}</h3>
            <h2 className="ml-10 text-white">{currentProgram}</h2>
            <p className="ml-10 text-sm">
               {time} Min. · {findCategory(target)}
            </p>
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Workout;
