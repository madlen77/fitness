import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useQuery, useApolloClient } from "@apollo/client";
import { useForm } from "react-hook-form";

import GET_USER from "../queries/user";
import GET_WORKOUT from "../queries/workout";

import { UserContext, DayContext, ProgramContext, NameContext, WorkoutContext } from "../main";
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
  const { setWorkout} = useContext(WorkoutContext);

  async function logIn(data) {
    const email = data.email;
    const password = data.password;

    const user = (
      await client.query({
        query: GET_USER,
        variables: { email: email},
      })
    ).data.appUser;

      

    if (password === user.password) {
      setEmail(email);
      setName(user.name);
      if (!user.currentProgram)
        return navigate("/");;
      setWorkout((await client.query({
      query: GET_WORKOUT,
      variables: { id: user.currentProgram.id, day: user.currentDay }})).data.program.workoutsWithDay[0].workout)
      setCurrentDay(user.currentDay);
      setCurrentProgram(user.currentProgram);
      navigate("/");     
    }
    
  }

  return (
    <>
      <h3 className="text-center mt-3 mb-[16rem]">Einloggen</h3>

      <form
        onSubmit={handleSubmit(logIn)}
        className="flex flex-col ml-12 mb-3"
      >
        <label htmlFor="email" className="bg-dark text-white mb-1">
          E-Mail
        </label>
        <input
          type="email"
          name="email"
          {...register("email")}
          id="email"
          placeholder="Deine Mail"
          {...register("email", { required: true })}
          className="bg-dark text-white rounded-md border-white border-[1px] w-[19rem] p-2 pl-4 mb-4"
        />
        {errors.email && <span>This field is required</span>}
        <label htmlFor="password" className="bg-dark text-white mb-1">
          Passwort
        </label>
        <input
          type="password"
          id="password"
          name="password"
          {...register("password", { required: true })}
          placeholder="Dein Passwort"
          className="bg-dark text-white rounded-md border-white border-[1px] w-[19rem] p-2 pl-4 mb-44"
        />
        {errors.password && <span>This field is required</span>}
        <div className="flex justify-center mr-12">
          <Button type="submit" text="Login" />
        </div>
      </form>

      <div className="flex flex-col items-center mb-6">
        <NavLink to={`/Register`} className="text-white">
          oder registrieren
        </NavLink>
      </div>
    </>
  );
}

export default SignIn;
