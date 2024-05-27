// import React from "react";
// import { useParams,  useLocation } from "react-router-dom";
// import { useQuery } from "@apollo/client";

// import Button from "../components/Button";
// import Navbar from "../components/navigation";
// import DayButton from "../components/DayButton";
// import ClosingButton from "../components/ClosingButton";
// import Wwrkouts3 from "../components/3Workouts";
// import GET_PROGRAM from "../queries/program";
// import PieChart from "../components/PieChart";



// function Program() {
  
//   const location = useLocation();
//   const params = useParams();
//   const programId = params.id;

//   const { loading, error, data } = useQuery(GET_PROGRAM, {
//     variables: { id: programId },
//   });

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error : {error.message}</p>;

//   const program = data.program;
//   const workouts = program.workoutsWithDay;
//   const workouts3 = workouts.slice(0, 3);

//   let showAll= false;


//   console.log(program.workouts.map())

//   function handleClick (){
//     showAll ? false : true;
//   }

//   return (
//     <div>
//       {/* <Header /> */}
//       <div className="rose relative ">
//         <ClosingButton />
//         <h1 className=" text-center pt-[51%]">{program.name}</h1>

//         <div className="flex justify-around pt-[35%] pb-[4%]">
//           <div className="flex-col items-center ">
//             <div className="bg-medium rounded-full h-[25px] w-[25px] m-auto"></div>
//             <p className="inline-block">{program.focus.toUpperCase()}</p>
//           </div>

//           <div className="flex-col items-center ">
//             <div className="bg-medium rounded-full h-[25px] w-[25px] m-auto"></div>
//             <p className="inline-block">{program.difficulty.toUpperCase()}</p>
//           </div>

//           <div className="flex-col items-center ">
//             <div className="bg-medium rounded-full h-[25px] w-[25px] m-auto"></div>
//             <p className="inline-block">{program.duration} DAYS</p>
//           </div>
//         </div>
//       </div>

//       <div className="bg-medium pl-5 pr-9 py-8">
//         <p className="">{program.description}</p>
//         <div className="flex justify-center mt-8">
//           <Button text="jetzt starten" />
//         </div>
//       </div>
//       <div className="mt-8 mx-5">
//         <h3>So ist das Programm aufgeteilt:</h3>
//         {/* Tortendiagramm */}
//         <PieChart />
//       </div>

//       <div className="mt-8 mx-5">
//         <h3 className="inline-block">{program.duration + 1} Tage</h3>
//         <button className="text-sm inline-block" onClick={handleClick}>
//           Alle anzeigen
//         </button>
//       </div>

//       <div className="mt-8 mx-5">
//         {showAll ? workouts.map((workout) => (
//             <div key={workout.id}>
//                 <DayButton day={workout.day} duration={workout.workout.duration} />
//             </div> 
//         )) : workouts3.map((workout) => (
//           <div key={workout.id}>
//               <DayButton day={workout.day} duration={workout.workout.duration} />
//           </div>
//         ))
//       }
//     </div>
//       <Navbar />
//     </div>
//   );
// }

// export default Program;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Button from "../components/Button";
import Navbar from "../components/navigation";
import DayButton from "../components/DayButton";
import ClosingButton from "../components/ClosingButton";
import GET_PROGRAM from "../queries/program";
import PieChart from "../components/PieChart";

function Program() {
  const params = useParams();
  const programId = params.id;

  const { loading, error, data } = useQuery(GET_PROGRAM, {
    variables: { id: programId },
  });

  const [showAll, setShowAll] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  const program = data.program;
  const workouts = program.workoutsWithDay;
  const workouts3 = workouts.slice(0, 3);
  
  var myProgram = false;
  
  function handleStart() {
   myProgram = programId;
  }

 
  function handleClick() {
    setShowAll(!showAll);
  }

  return (
    <div>
      <div className="rose relative">
        <ClosingButton />
        <h1 className="text-center pt-[51%]">{program.name}</h1>

        <div className="flex justify-around pt-[35%] pb-[4%]">
          <div className="flex-col items-center">
            <div className="bg-medium rounded-full h-[25px] w-[25px] m-auto"></div>
            <p className="inline-block">{program.focus.toUpperCase()}</p>
          </div>

          <div className="flex-col items-center">
            <div className="bg-medium rounded-full h-[25px] w-[25px] m-auto"></div>
            <p className="inline-block">{program.difficulty.toUpperCase()}</p>
          </div>

          <div className="flex-col items-center">
            <div className="bg-medium rounded-full h-[25px] w-[25px] m-auto"></div>
            <p className="inline-block">{program.duration} DAYS</p>
          </div>
        </div>
      </div>

      <div className="bg-medium pl-5 pr-9 py-8">
        <p>{program.description}</p>
        <div className="flex justify-center mt-8">
          <Button text="jetzt starten" onClick={handleStart} />
        </div>
      </div>
      <div className="mt-8 mx-5">
        <h3>So ist das Programm aufgeteilt:</h3>
        <PieChart />
      </div>

      <div className="mt-8 mx-5">
        <h3 className="inline-block">{program.duration + 1} Tage</h3>
        <button className="text-sm inline-block" onClick={handleClick}>
          Alle anzeigen
        </button>
      </div>

      <div className="mt-8 mx-5">
        {showAll ? workouts.map((workout) => (
          <div key={workout.id}>
            <DayButton day={workout.day} duration={workout.workout.duration} />
          </div>
        )) : workouts3.map((workout) => (
          <div key={workout.id}>
            <DayButton day={workout.day} duration={workout.workout.duration} />
          </div>
        ))}
      </div>
      <Navbar />
    </div>
  );
}

export default Program;
