import { useLocation, useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import DayButton from "../components/DayButton";
import GET_PROGRAM from "../queries/program";

import close from "../assets/close.svg";

function Header() {
  return (
    <div>
      <div className="rose relative ">
        <img src={close} alt="close" className="absolute top-5 right-5"></img>
        <h1 className=" text-center pt-[51%]">{this.props.name}</h1>

        <div className="flex justify-around pt-[35%] pb-[4%]">
          
          <div className="flex-col items-center ">
            <div className="bg-medium rounded-full h-[25px] w-[25px] m-auto"></div>
            <p className="inline-block">{this.props.focus.toUpperCase()}</p>
          </div>

          <div className="flex-col items-center ">
            <div className="bg-medium rounded-full h-[25px] w-[25px] m-auto"></div>
            <p className="inline-block">{this.props.difficulty.toUpperCase()}</p>
          </div>

          <div className="flex-col items-center ">
            <div className="bg-medium rounded-full h-[25px] w-[25px] m-auto"></div>
            <p className="inline-block">{this.props.duration} DAYS</p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Header;
