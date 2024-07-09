import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useQuery, useApolloClient } from "@apollo/client";
import { useForm } from "react-hook-form";

import GET_USER from "../queries/user";
import { UserContext, DayContext, ProgramContext, NameContext } from "../main";
import Button from "../components/Button";

function SignIn() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const client = useApolloClient();
  const navigate = useNavigate();

  const { setEmail } = useContext(UserContext);
  const { setCurrentDay } = useContext(DayContext);
  const { setCurrentProgram } = useContext(ProgramContext);
  const { setName } = useContext(NameContext);

  async function logIn(data) {
    const email = data.email;
    const password = data.password;

    const user = (
      await client.query({
        query: GET_USER,
        variables: { email: email },
      })
    ).data.appUser;

    if (password === user.password) {
      navigate("/");
      setEmail(email);
      setCurrentDay(user.currentDay);
      setCurrentProgram(user.currentProgram);
      setName(user.name);
    } else {
    }
  }

  return (
    <>
      <p>Einloggen</p>

      <form
        noValidate
        onSubmit={handleSubmit(logIn)}
        className="flex flex-col ml-12 mb-6"
      >
        <label htmlFor="email" className="bg-dark text-white mb-2">
          E-Mail
        </label>
        <input
          type="email"
          //   name="email"
          {...register("email")}
          //   id="email"
          placeholder="Deine Mail"
          {...register("email", { required: true })}
          className="bg-dark text-white rounded-md border-white border-[1px] w-[19rem] p-1 pl-4"
        />
        {errors.email && <span>This field is required</span>}
        <label htmlFor="password" className="bg-dark text-white mb-2">
          Passwort
        </label>
        <input
          type="password"
          //   id="password"
          name="password"
          {...register("password", { required: true })}
          placeholder="Dein Passwort"
          className="bg-dark text-white rounded-md border-white border-[1px] w-[19rem] p-1 pl-4"
        />
        {errors.password && <span>This field is required</span>}
        <Button type="submit" text="Login" />
      </form>

      <div className="flex flex-col items-center mt-6">
        <NavLink to={`/Register`} className="text-white">
          oder registrieren
        </NavLink>
      </div>
    </>
  );
}

export default SignIn;
