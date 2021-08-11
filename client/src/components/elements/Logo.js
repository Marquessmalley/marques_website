import React from "react";
import { Link } from "react-router-dom";

function Logo({ logoSource, bootstrapNav }) {
  if (bootstrapNav) {
    return (
      <Link className="navbar-brand" to="/">
        <img src={logoSource} alt="Marques" />
      </Link>
    );
  }

  return (
    <div className="site-logo">
      <Link to="/" className="logo-link">
        {/* <img src={logoSource} alt="Marques" /> */}
        <h1 className="header-logo">DEV MJ</h1>
      </Link>
    </div>
  );
}

export default Logo;
