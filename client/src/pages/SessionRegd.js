import React from "react";
import { NavLink } from "react-router-dom";

const SessionRegd = () => {
  const inputStyle = {
    borderRadius: "2px",
    padding: "5px",
    border: "none",
    borderBottom: "1px solid white",
    color: "white",
  };
  return (
    <>
      <div className="regd-box left">
        <div className="regd-form">
          <div className="regd-head my-5">
            <h2>Register for your session</h2>
            <hr />
          </div>
          <div className="regd-form-input row mx-5">
            <form action="">
              <label className="regd-label my-2">Name :</label>
              <div className="regd-ses">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="col-4"
                  style={inputStyle}
                />
              </div>
              <label className="regd-label my-2">Contact :</label>
              <div className="regd-ses">
                <input
                  type="number"
                  placeholder="Enter Your Name"
                  className="col-4"
                  style={inputStyle}
                />
              </div>
              <label className="regd-label my-2">About Yourself :</label>
              <div className="regd-ses">
                {/* <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="col-4"
                  style={inputStyle}
                /> */}
                <textarea name="" id="" cols="40" rows="5"></textarea>
              </div>
              <div className="regd-btn mt-4 row mx-3">
                <NavLink
                  to="/"
                  className="btn btn-danger col-2"
                  // onClick={postData}
                >
                  Submit
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SessionRegd;
