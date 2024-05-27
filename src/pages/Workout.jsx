import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import woman from "../assets/woman.svg";
import Hallo from "../components/Components";
import Navbar from "../components/navigation";
import WorkoutButton from "../components/WotkoutButton";
import Button from "../components/Button";
import ClosingButton from "../components/ClosingButton";

function App() {
  return (
    <>
    <p className="text-center text-sm">Titel des Programms</p>
    {/* Bild */}
    <ClosingButton content="x" />
    <h1 className="text-center">Tag 1</h1>
    <p className="text-center text-sm">26 Min. · Kraft und Koordination</p>
    <div className="flex justify-center">

    <Button text="los!"/>
    </div>
    </>
  );
}

export default App;
