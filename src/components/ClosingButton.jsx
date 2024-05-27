import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import close from "../assets/close.svg";

function ClosingButton({ content }) {
    console.log(content)
  const navigate = useNavigate();
  return (
    <div>
      <p>{content}</p>
      <button onClick={() => navigate(-1)}>
        <img src={close} alt="close" className="absolute top-5 right-5"></img>
      </button>
    </div>
  );
}

export default ClosingButton;
