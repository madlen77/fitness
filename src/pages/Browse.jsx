import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import Navbar from "../components/navigation";
import WorkoutButton from "../components/WotkoutButton";
import { useQuery, gql } from "@apollo/client";
import GET_TITLES from "../queries/titles";

function Browse() {
  const { loading, error, data } = useQuery(GET_TITLES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);

  return (
    <div>
      {data.programs.map((program) => (
        <div key={program.id}><a href={`program/:program.id`}>
        <WorkoutButton text={program.name} />
      </a></div>
      ))}
      <Navbar />
    </div>
  );
}

export default Browse;
