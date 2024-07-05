import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";

import close from "../assets/close.svg";

function ClosingButton({ content }) {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}>
        <img src={close} alt="close" className="absolute top-5 right-5"></img>
      </button>
    </div>
  );
}

ClosingButton.propTypes = {
  
}

export default ClosingButton;
