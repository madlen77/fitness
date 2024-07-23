import React, { useContext} from "react";
import { NavLink } from "react-router-dom";

import woman from "../assets/woman.svg";
import Navbar from "../components/navigation";
import WorkoutButton from "../components/WotkoutButton";
import { NameContext, ProgramContext } from "../main";

function App() {
  const name = useContext(NameContext).name
  const currentProgram = useContext(ProgramContext).currentProgram.id
  return (
    <div>
      <h1 className="ml-5 mt-8">Hi {name}!</h1>

      <div className="flex justify-evenly my-7">
        <img src={woman} alt="woman is stretching" className="h-64" />
      </div>

      <div className="flex justify-between">
        <h2 className="ml-5">Dein Workout heute</h2>
        <NavLink to={`/program/${currentProgram}`}>

        <p className="self-end pt-2 mr-5">Trainingsplan</p>
        </NavLink>
      </div>

      <WorkoutButton />

      <Navbar />
    </div>
  );
}

export default App;
