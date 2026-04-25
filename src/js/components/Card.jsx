import React from "react";

const Card = ({ people }) => {
    return (
        <div className="col-md-3">
            <div className="card h-100">

                {/* Imagen con URL dinámica */}
                <img
                    src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${people.uid}.jpg`}
                    className="card-img-top"
                    alt={people.name}
                    style={{ height: "300px", objectFit: "cover" }}
                    onError={(e) => {
                        e.target.src = "https://via.placeholder.com/300x300?text=No+Image"; // Imagen de fallback
                    }}
                />

                <div className="card-body">
                    <h5 className="card-title">{people.name}</h5>
                    <p className="card-text">
                        Gender: {people.gender || "unknown"}
                    </p>
                </div>

                <div className="card-footer text-center">
                    <button className="btn btn-primary">
                        Learn more
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Card;