import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Start Bootstrap</a>
        <div>
          <a className="text-light me-3" href="#">Home</a>
          <a className="text-light me-3" href="#">About</a>
          <a className="text-light" href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 