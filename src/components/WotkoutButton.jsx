import React from "react";
import { Link } from "react-router-dom";
class Workout extends React.Component {
  render() {
    return (
        // <li>
            // {/* <Link to={this.props.wLink}> */}
            // {/* </Link> */}
        // {/* </li> */}
        <div className='flex justify-evenly'>
            
        <button className="rounded-[2.5rem] bg-medium w-11/12 h-[13.5rem] mt-5">
                <p>{this.props.text}</p>
        </button>
        </div>
    )
  }
}

Workout.defaultProps = {
    wLink :"",
    text : "Bitte starte zu erst ein Program<br/>Jetzt browsen",
};

export default Workout;

