import React from 'react'

const AboutUs = () => {
  return (
    <div className='container'>
      <h3 className='text-center my-3' style={{ color: "#41245C", fontSize: "50px" }}><b>Team Shot Callers</b></h3>
      <h4 className='text-center'>
        Greetings from Team Shot Callers, a vibrant group representing the Learn
        Academy Golf 2023 cohort:
      </h4>
      <h5 className='text-center'>Meet the Team:</h5>
      <ul className="list-unstyled text-center">
        <li><b>Michael Reyes</b></li>
        <li><b>Jeffrey Guzman</b></li>
        <li><b>Eric McKee</b></li>
        <li><b>Franz Marte</b></li>
      </ul>
      <p className='fs-4 mx-auto' style={{ color: "#41245C"}}>
        Ever dreamt of effortlessly discovering nearby basketball games in
        real-time or, on the flip side, finding empty parks for some solo
        practice? Enter ShotCallers, our brainchild aiming to redefine your
        basketball experience.
      </p>
      <h5>Our Mission:</h5>
      <p>
        ShotCallers is not just an app; it's a vision brought to life by Team
        Shot Callers. We are dedicated to providing a platform that fosters
        real-time connections among basketball enthusiasts, enhancing the
        overall experience for those on the lookout for a spontaneous pickup
        game.
      </p>
      <h5>Why Choose ShotCallers:</h5>
      <ul className="list-unstyled">
        <li>
          Real-Time Court Map: Explore nearby games or locate empty courts
          instantly.
        </li>
        <li>
          Spontaneous Connections: Foster camaraderie among basketball
          enthusiasts, making every pickup game memorable.
        </li>
        <li>
          User-Centric Design: Our app is meticulously crafted to make finding
          and participating in pickup games intuitive and enjoyable.
        </li>
      </ul>
      <p>
        Whether you're a seasoned player seeking a competitive match or a casual
        enthusiast looking to shoot some hoops, Shot Callers is your go-to
        destination for an elevated basketball experience. Join us as we
        redefine the game, connecting like-minded individuals who share a
        passion for basketball. Thank you for being part of our journey!
      </p>
      <h4>Team Shot Callers</h4>
    </div>
  );
};

export default AboutUs