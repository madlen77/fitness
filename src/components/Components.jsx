import React from "react";
class Hallo extends React.Component {
  render() {
    return <h1 className="ml-5 mt-8">Hi {this.props.name}!</h1>;
  }
}

Hallo.defaultProps = {
  name: "Person",
};

export default Hallo;
