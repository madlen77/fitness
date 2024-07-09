import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Button from "../components/Button";
import ClosingButton from "../components/ClosingButton";
import GET_PROGRAM from "../queries/program";

function App() {
  const { programId, workoutId, day } = useParams();

  const { loading, error, data } = useQuery(GET_PROGRAM, {
    variables: { id: programId },
  });

  const [showAll, setShowAll] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  const program = data.program;
  console.log(program.workoutsWithDay[day - 1].workout.exercises);

  function findCategory() {
    if (
      program.workouts.find(
        (element) => element.id === program.workoutsWithDay[day - 1].workout.id
      ).category === "weightTraining"
    )
      return "Kafttraining";
    else if (
      program.workouts.find(
        (element) => element.id === program.workoutsWithDay[day - 1].workout.id
      ).category === "cardio"
    )
      return "Cardio";
    else if (
      program.workouts.find(
        (element) => element.id === program.workoutsWithDay[day - 1].workout.id
      ).category === "coordination"
    )
      return "Koordination";
    else if (
      program.workouts.find(
        (element) => element.id === program.workoutsWithDay[day - 1].workout.id
      ).category === "mobility"
    )
      return "Beweglichkeit";
  }

  return (
    <>
      <p className="text-center text-sm mt-4">{program.name}</p>
      {/* Bild */}
      <ClosingButton content="x" />
      <h1 className="text-center mt-[31vh]">Tag {day}</h1>
      <p className="text-center text-sm">
        {program.workoutsWithDay[day - 1].workout.duration} Min. ·{" "}
        {findCategory()}{" "}
      </p>
      <div className="flex justify-center mt-[30vh]">
        <Button text="los!" exercise="1" />
      </div>
    </>
  );
}

export default App;
