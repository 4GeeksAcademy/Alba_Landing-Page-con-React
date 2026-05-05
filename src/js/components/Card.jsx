import React from "react";

//create your first component
const Card = () => {
    return (
        <div className="mt-5">
            <div className="row g-4">

                <div className="col-md-3">
                    <div className="card h-100">
                        <img src="https://picsum.photos/500/325?1" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-primary">Find Out More!</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card h-100">
                        <img src="https://picsum.photos/500/325?2" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-primary">Find Out More!</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card h-100">
                        <img src="https://picsum.photos/500/325?3" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                            </p>
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-primary">Find Out More!</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card h-100">
                        <img src="https://picsum.photos/500/325?4" className="card-img-top" alt="Different card" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-primary" >Find Out More!</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card;