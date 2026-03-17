import React from "react";

export const Card = (props) => {
    return (
        <div className="col-md-3">
            <div className="card">
                <img src={props.image} className="card-img-top" alt="card image" />
                
                <div className="card-body text-center">
                    <h5 className="card-title">{props.title}</h5>

                    <p className="card-text">
                        {props.text}
                    </p>

                    <a href="#" className="btn btn-primary">
                        Find Out More!
                    </a>
                </div>
            </div>
        </div>
    )
}