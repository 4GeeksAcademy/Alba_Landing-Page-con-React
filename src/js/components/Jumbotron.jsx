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

        {/* Imágenes generales (no relacionadas con SWAPI) */}
        <div className="row mt-4">

          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
              className="img-fluid rounded"
              alt="mountains"
            />
          </div>

          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1496307653780-42ee777d4833"
              className="img-fluid rounded"
              alt="city"
            />
          </div>

          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              className="img-fluid rounded"
              alt="nature"
            />
          </div>

        </div>

        <button className="btn btn-primary btn-lg mt-4">
          Call to action!
        </button>

      </div>
    </div>
  );
};

export default Jumbotron;