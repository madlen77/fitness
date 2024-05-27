import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import Navbar from "../components/navigation";
import WorkoutButton from "../components/WotkoutButton";
import { useQuery, gql } from "@apollo/client";
import GET_TITLES from "../queries/titles";

function Browse() {
  const colors = ['rose rounded-[2.5rem] w-11/12 h-[13.5rem] mt-5 flex items-center justify-center', 'green rounded-[2.5rem] w-11/12 h-[13.5rem] mt-5 flex items-center justify-center', 'blue rounded-[2.5rem] w-11/12 h-[13.5rem] mt-5 flex items-center justify-center'];
  const { loading, error, data } = useQuery(GET_TITLES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);

  const {programs} = data;

  return (
    <div>
      {programs.map((program, index) => (
        <div key={program.id}>
        <WorkoutButton text={program.name} link={program.id} style={colors[index % colors.length]}/>
      </div>
      ))}
      <Navbar />
    </div>
  );
}

export default Browse;
