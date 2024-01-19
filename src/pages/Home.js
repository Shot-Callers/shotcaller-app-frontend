import React from "react";
import bball1 from "../assests/bball1.jpeg";
import phone1 from "../assests/Phone1.png";
import phone2 from "../assests/Phone2.png";
const Home = () => {
  return (
    <div className="intro">
      <div className="overlap-group-wrapper" style={{ height: "80vh" }}>
        <div className="overlap-group" style={{ maxHeight: "95vh" }}>
          <p className="find-a-basketball">
            <span className="text-wrapper">Find </span>
            <span className="span">a Basketball&nbsp;&nbsp;Court </span>
            <span className="text-wrapper">
              Nearby
              <br />
              <br />
              Ball is Life!
            </span>
          </p>
          <img alt="bballimg" className="bballimg" src={bball1} />
          <img alt="phone1" className="phone1" src={phone1} />
          <img alt="phone2" className="phone2" src={phone2} />
        </div>
      </div>
    </div>
  );
};

export default Home;
