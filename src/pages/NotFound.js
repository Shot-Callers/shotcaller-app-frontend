import React from 'react'
import errorimg from '../assests/error.png'
const NotFound = () => {
  return (
    <div className="not-found d-flex justify-content-evenly align-items-center mx-auto mt-5 fs-1 ">
      <p>Shoot Again, 404 Not Found</p>
      <img src={errorimg} width="400px" height="400px" style={{ backgroundColor: "#F04A66", borderRadius: "50px"}}/>
    </div>
  );
};


export default NotFound