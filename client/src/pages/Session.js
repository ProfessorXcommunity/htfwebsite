import React from "react";
import { NavLink } from "react-router-dom";

const Session = () => {
  return (
    <>
      <div className="session-box left">
        <div className="session-head my-5">
          <h2>Session</h2>
          <hr />
        </div>
        <div className="session-btn d-flex justify-content-center">
          <button className="btn btn-dark">
            <i class="bx bx-plus-circle"></i>Add your Session
          </button>
        </div>
        <div className="tip row my-5">
          <div className="tip-box col-12">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div class="card">
                    {/* <img
                      src="https://source.unsplash.com/1600x900/?walking"
                      class="card-img-top"
                      alt="..."
                    /> */}
                    {/* <h4>ARIJIT KUMAR SAHU</h4> */}
                    <div class="card-body">
                      <h5 class="card-title">HEALTHY LIFE</h5>
                      <hr />
                      <br />
                      <div className="dt d-flex flex-row">
                        <div className="date col-6">Date: 12 Oct 2012</div>
                        <div className="time col-6">Time: 06.00AM</div>
                      </div>
                      <hr />
                      <h6>By-Dr.Himmat Singh</h6>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium vitae aut recusandae fugiat unde corrupti
                        nesciunt maxime, quia earum optio.
                      </p>
                      <div className="register-btn">
                        <NavLink to="/regd" className="btn btn-danger">
                          Register
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div class="card">
                    {/* <img
                      src="https://source.unsplash.com/1600x900/?walking"
                      class="card-img-top"
                      alt="..."
                    /> */}
                    {/* <h4>ARIJIT KUMAR SAHU</h4> */}
                    <div class="card-body">
                      <h5 class="card-title">HEALTHY LIFE</h5>
                      <hr />
                      <br />
                      <div className="dt d-flex flex-row">
                        <div className="date col-6">Date: 12 Oct 2012</div>
                        <div className="time col-6">Time: 06.00AM</div>
                      </div>
                      <hr />
                      <h6>By-Dr.Himmat Singh</h6>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium vitae aut recusandae fugiat unde corrupti
                        nesciunt maxime, quia earum optio.
                      </p>
                      <div className="register-btn">
                        <button className="btn btn-danger">Register</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div class="card">
                    {/* <img
                      src="https://source.unsplash.com/1600x900/?walking"
                      class="card-img-top"
                      alt="..."
                    /> */}
                    {/* <h4>ARIJIT KUMAR SAHU</h4> */}
                    <div class="card-body">
                      <h5 class="card-title">HEALTHY LIFE</h5>
                      <hr />
                      <br />
                      <div className="dt d-flex flex-row">
                        <div className="date col-6">Date: 12 Oct 2012</div>
                        <div className="time col-6">Time: 06.00AM</div>
                      </div>
                      <hr />
                      <h6>By-Dr.Himmat Singh</h6>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium vitae aut recusandae fugiat unde corrupti
                        nesciunt maxime, quia earum optio.
                      </p>
                      <div className="register-btn">
                        <button className="btn btn-danger">Register</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Session;
