import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import Navbar from "../components/navigation";
import WorkoutButton from "../components/WotkoutButton";
import {useLocation, useParams} from "react-router-dom";

function Program () {
    const location = useLocation();
    const params = useParams();
    console.log(location, params);
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default Program ;