import React from "react";

//Stateless Functional Component

const NavBar = props => {
  console.log("NavBar Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </span>
    </nav>
  );
};

export default NavBar;
