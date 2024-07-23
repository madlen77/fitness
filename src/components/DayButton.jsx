import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ClosingButton from "./ClosingButton";
import { DayContext, ProgramContext, WorkoutContext } from "../main";


function Button({ workoutId, day, programId, duration }) {
  const { currentDay } = useContext(DayContext);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleDayClick = () => {
    if (day === currentDay) {
      // Access granted for the current day
      console.log(`Access granted for day ${day}`);
      navigate(`/program/${programId}/workout/${workoutId}/${currentDay}`);
    } else {
      // Access denied, show popup
      setShowPopup(true);
    }
  };

  const closePopup = (e) => {
    e.stopPropagation();
    setShowPopup(false);
    console.log(setShowPopup(false));
  };

  // return (
  //   <>
  //     <ul>
  //       <li>
  //         <NavLink
  //           className="h-[100px] flex w-full rounded-3xl bg-medium mb-3"
  //           to={`/program/${programId}/workout/${workoutId}/${day}`}
  //         >
  //           <div className="w-[26.6%] h-full rounded-l-3xl  rose"></div>
  //           <div>
  //             <h3 className="text-left pl-3 pt-3 pb-4 ">Tag {day}</h3>
  //             <p className="pl-3 text-sm text-left leading-4">
  //               {duration} Min. ·<br />
  //               Beweglichkeit{" "}
  //             </p>
  //           </div>
  //         </NavLink>
  //       </li>
  //     </ul>
  //   </>
  // );
  return (
    <>
      <ul>
        <li>
          <button
            className="h-[100px] flex w-full rounded-3xl bg-medium mb-3"
            onClick={handleDayClick}
          >
            {showPopup && (
              <div className="flex justify-center fixed top-1/3 w-full mr-5 ">
                <div className=" bg-medium  shadow-md shadow-dark px-10 pt-10 pb-7 rounded-lg">
                  <h3 className="mb-10">Du bist gerade bei Tag {currentDay}.</h3>
                  <div onClick={closePopup}>Close</div>
                </div>
              </div>
            )}
            <div className="w-[26.6%] h-full rounded-l-3xl  rose"></div>
            <div>
              <h3 className="text-left pl-3 pt-3 pb-4 ">Tag {day}</h3>
              <p className="pl-3 text-sm text-left leading-4">
                {duration} Min. ·<br />
                Beweglichkeit{" "}
              </p>
            </div>
          </button>
        </li>
      </ul>
    </>
  );
}

export default Button;
