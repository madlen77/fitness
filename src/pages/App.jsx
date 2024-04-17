import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import woman from "../assets/woman.svg";
import Hallo from "../components/Components";
import Navbar from "../components/navigation";
import WorkoutButton from "../components/WotkoutButton";

function App() {
  return (
    <div>
      <Hallo />
      <div className="flex justify-evenly my-7">
        <img src={woman} alt="woman is stretching" />
      </div>
      <div className="flex justify-between">
        <h2 className="ml-5">Dein Workout heute</h2>
        <p className="self-end mr-5">Trainingsplan</p>
      </div>
      <WorkoutButton text="noooo" />
      <Navbar />
    </div>
  );
}

export default App;
