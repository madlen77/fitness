import React, { useContext } from "react";
import Navbar from "../components/navigation";
import { DayContext, NameContext, ProgramContext } from "../main";
//import { ProgressCircle } from "react-native-svg-charts";
function Profile() {
  const currentProgram = useContext(ProgramContext).currentProgram.name
  const currentDay = useContext(DayContext).currentDay
  const name = useContext(NameContext).name
  return (
    <div>
      <h2 className="mt-8 mb-16 ml-3">{name}</h2>
      <div>
      <div className="rounded-full h-10 w-10 bg-amber-200"></div>
      <p>Profil bearbeiten</p>
      </div>
      <div>
        <p>Aktueller Trainingsplan</p>
        <div className="flex bg-medium m-3 rounded-lg p-8">
        <div className="rounded-full h-10 w-10 bg-amber-200"></div>
          {/* circle */}
          
          <div>
          <p>{currentProgram}</p>
          <p className="text-sm">{currentDay - 1} von x geschafft</p>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Profile;
