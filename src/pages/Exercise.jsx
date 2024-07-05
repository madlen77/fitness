import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Button from "../components/Button";
import Navbar from "../components/navigation";
import DayButton from "../components/DayButton";
import ClosingButton from "../components/ClosingButton";
import GET_PROGRAM from "../queries/program";
import PieChart from "../components/PieChart";
import GET_TITLE from "../queries/title";

function Exercise() {
  const {programId, workoutId, day, exercise} = useParams();

  const { loading, error, data } = useQuery(GET_PROGRAM, {
    variables: { id: programId },
  });

  const [showAll, setShowAll] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  const program = data.program;
  console.log(programId)



  return (
    <>
    </>
  );
}

export default Exercise;
