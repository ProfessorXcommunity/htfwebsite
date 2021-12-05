import React from "react";

const Forum = () => {
  const style1 = {
    border: "1px solid white",
  };
  return (
    <>
      <div className="forum-box left">
        <div className="forum-head my-5">
          <h2>Forum</h2>
          <hr />
        </div>
        <div className="forum-area col-8">
          {/* <textarea name="" id="" cols="100" rows="10"></textarea> */}
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img
                  src="https://source.unsplash.com/1600x900/?walking"
                  className="d-block w-100"
                  alt=""
                />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="https://source.unsplash.com/1600x900/?walking"
                  className="d-block w-100"
                  alt=""
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://source.unsplash.com/1600x900/?walking"
                  className="d-block w-100"
                  alt=""
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <br />
        <div className="forum-create">
          <button className="btn btn-danger">Ask Your Question</button>
        </div>
        <div className="forum-page my-5" style={style1}>
          <div className="users d-flex py-3">
            <i class="bx bxs-user-circle bx-md"></i>
            <h4 className="mx-2">Arijit</h4>
          </div>
          <hr />
          <div className="user-content">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              dolorum odio fugit dolores distinctio dicta? Minus consectetur
              doloribus omnis iste ex voluptatibus totam ullam assumenda sequi?
              Velit eos blanditiis, voluptatem illo tempore cupiditate voluptas
              dolores neque officia qui enim magni provident corrupti ullam
              animi consequatur illum aperiam explicabo, nulla at?
            </p>
          </div>
          <hr />
          <div className="forum-btn my-2 mx-3">
            <button className="btn btn-danger col-2">Reply</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forum;
