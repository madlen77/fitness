import React, { useEffect, useState } from "react";

const ProgressBar = ({ duration }) => {
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(duration);
  const intervalDuration = 0.0000001; // Update every 10ms for smooth animation

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 360 / (duration * 66));
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [duration]);

  useEffect(() => {
    if (timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timeLeft]);

  return (
    <div className="flex justify-center items-center h-60">
      <div className="relative flex justify-center items-center w-52 h-52">
        <div
          className="absolute w-full h-full rounded-full"
          style={{
            background: `conic-gradient(#ffd162 0deg, #ff99c3 ${progress}deg, #3A4151 ${progress}deg, #3A4151 360deg)`,
            transition: "background 0.1s linear",
          }}
        />
        <div className="flex justify-center items-center w-40 h-40 bg-dark rounded-full z-10">
          <span className="text-2xl font-bold text-white">
            {Math.ceil(timeLeft)} sec
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
