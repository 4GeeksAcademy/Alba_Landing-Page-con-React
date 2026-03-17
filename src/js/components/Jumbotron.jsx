import React from "react";

const Jumbotron = () => {
  return (
    <div className="container mt-4">
      <div className="p-5 bg-light rounded text-center">
        <h1 className="display-4">A Warm Welcome!</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
        </p>
        <button className="btn btn-primary btn-lg">Call to action!</button>
      </div>
    </div>
  );
};

export default Jumbotron;