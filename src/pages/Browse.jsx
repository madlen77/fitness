import React, { createContext, useContext } from "react";
import { useQuery } from "@apollo/client";

import { ProgramContext } from "../main";
import GET_TITLES from "../queries/titles";

import Navbar from "../components/navigation";
import WorkoutButton from "../components/WotkoutButton";

const Browse = () => {
  const colors = [
    "rose rounded-[2.5rem] w-11/12 h-[13.5rem] mt-5 flex items-center justify-center",
    "green rounded-[2.5rem] w-11/12 h-[13.5rem] mt-5 flex items-center justify-center",
    "blue rounded-[2.5rem] w-11/12 h-[13.5rem] mt-5 flex items-center justify-center",
  ];

  const { loading, error, data } = useQuery(GET_TITLES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  const { programs } = data;

  return (
    <ProgramContext.Provider value={programs}>
      <div>
        {programs.map((program, index) => (
          <div key={program.id}>
            <WorkoutButton
              text={program.name}
              link={program.id}
              style={colors[index % colors.length]}
            />
          </div>
        ))}

        <Navbar />
      </div>
    </ProgramContext.Provider>
  );
};

export default Browse;
