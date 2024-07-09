import React from "react";
import { NavLink } from "react-router-dom";

import Button from "../components/Button";

import woman from "../assets/woman.svg";

function Login() {
  return (
    <>
      <img src={woman} alt="woman is stretching" className="w-full my-36" />

      <div className="flex  flex-col items-center">
        <Button text="registrieren"  />

        <NavLink to={`/SignIn`} className="mt-4">
        <button>oder anmelden</button>
        </NavLink>
      </div>
    </>
  );
}

export default Login;
