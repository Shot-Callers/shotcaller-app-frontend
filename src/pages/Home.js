import React from "react";
import bball1 from "../assests/bball1.jpeg"

const Home = () => {
  return (
    <div className="intro">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
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
          <img className="bballimg" src={bball1}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
