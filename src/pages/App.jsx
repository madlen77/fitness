import React from "react";

import woman from "../assets/woman.svg";
import Navbar from "../components/navigation";
import WorkoutButton from "../components/WotkoutButton";

function App() {
  return (
    <div>
      <h1 className="ml-5 mt-8">Hi Person!</h1>

      <div className="flex justify-evenly my-7">
        <img src={woman} alt="woman is stretching" className="h-64" />
      </div>

      <div className="flex justify-between">
        <h2 className="ml-5">Dein Workout heute</h2>
        <p className="self-end mr-5">Trainingsplan</p>
      </div>

      <WorkoutButton />

      <Navbar />
    </div>
  );
}

export default App;
