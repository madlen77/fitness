import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import GET_PROGRAM from "../queries/program";
import { WorkoutContext } from "../main";
import ProgressBar from "../components/progressBar";

function Exercise({}) {
  const params = useParams();
  const exercise = params.exercise;

  const workout  = useContext(WorkoutContext).currentWorkout.exercises[exercise]

  console.log(workout)

  if (workout.exercise.type === "duration"){
    return (
      <>
      <div>
        <div className="h-[25px] w-[25px] border-2 border-medium rounded-full"></div>
        <div className="w-[3.25rem] border-dotted  border-medium border-t-[0.2rem]"></div>
      </div>
    <div className="flex flex-col items-center">
    <ProgressBar duration= {workout.duration}/>
    <h1>{workout.exercise.name}</h1>
    </div>
      </>
  );
  }
  
}

export default Exercise;
