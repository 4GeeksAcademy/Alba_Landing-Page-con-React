import React from "react";

const Jumbotron = () => {
  return (
    <div className="container mt-5">
      <div className="p-5 mb-4 bg-secondary-subtle rounded-3 text-center">

        <h1 className="display-4 fw-normal">
          Explora el universo
        </h1>

        <p className="fs-4">
          Descubre paisajes, ciudades y aventuras increíbles a través de este sitio.
          Cada sección está pensada para inspirarte y mostrarte algo diferente.
        </p>

        

        <button className="btn btn-primary btn-lg mt-4">
          Call to action!
        </button>

      </div>
    </div>
  );
};

export default Jumbotron;