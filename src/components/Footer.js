import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary p-2 fixed-bottom text-dark text-center">
      <small>&copy;ShotCaller App | {new Date().getFullYear()}</small>
    </footer>
  );
};
export default Footer;