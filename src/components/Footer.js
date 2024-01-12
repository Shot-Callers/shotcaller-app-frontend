import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-2 text-center fixed-bottom">
      <small>&copy;ShotCaller App | {new Date().getFullYear()}</small>
    </footer>
  );
};
export default Footer;