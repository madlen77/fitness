import React from "react";
import { VictoryPie } from "victory-pie";
import PropTypes from "prop-types";


const PieChart = (props) => {
  const myData = [
    { x: "Group A", y: props.weight },
    { x: "Group B", y: props.coordination },
    { x: "Group C", y: props.cardio },
    { x: "Group D", y: props.mobility },
  ];
  return (
    <div className="flex items-center justify-evenly">
      <div className="w-[43%]">
        <VictoryPie
        style={
          { labels: { display: "none"} }

      }
      padding={{ top: 20, bottom: 20, left: 20, right: 20 }}
      width={200}
      height={200}
        data={myData}
        colorScale={["#3ef3e8", "#ff99c3", "#3b85e6", "#f5ffa0"]}
        radius={100}
      />
      </div>
      
      <div className="mr-5">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#3ef3e8] rounded-2xl mr-1"></div>
          <p>Kraftraining</p>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#3b85e6] rounded-2xl mr-1"></div>
          <p>Koordination</p>
        </div>

        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#ff99c3] rounded-2xl mr-1"></div>
          <p>Cardio</p>
        </div>

        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#f5ffa0] rounded-2xl mr-1"></div>
          <p>Beweglichkeit</p>
        </div>
      </div>
    </div>
  );
};

PieChart.propTypes = {
  weight: PropTypes.number
}

export default PieChart;
