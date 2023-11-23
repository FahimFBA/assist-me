import { Link } from "react-router-dom";
import CustomNavlink from "./CustomNavlink";
import { useState } from "react";
import Logo from "../../Logo";

const Navbar = () => {
  const [showNavbar, setShowNavBar] = useState<boolean>(false);

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top bg-dark"
      data-bs-theme="dark"
    >
      <div className="container">
        {/* <!-- Logo --> */}
        <Link className="navbar-brand ms-3" to="/">
          <Logo />
        </Link>

        {/* <!-- Navbar toggler button --> */}
        <button
          className={`navbar-toggler ${showNavbar && "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded={showNavbar ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={() => setShowNavBar(!showNavbar)}
        >
          <div className="navbar-toggler-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* <!-- Navbar content --> */}
        <div
          className={`collapse navbar-collapse ${showNavbar && "show"}`}
          id="navbarContent"
        >
          <div className="navbar-content-inner ms-lg-auto d-flex flex-column flex-lg-row align-lg-center gap-4 gap-lg-10 p-2 p-lg-0">
            <ul className="navbar-nav gap-lg-2 gap-xl-5">
              <CustomNavlink
                label="Home"
                to="/"
                onClick={() => setShowNavBar(false)}
              />
              <CustomNavlink
                label="Use Cases"
                to="/use-cases"
                onClick={() => setShowNavBar(false)}
              />
              <CustomNavlink
                label="Pricing"
                to="/pricing"
                onClick={() => setShowNavBar(false)}
              />
              <CustomNavlink
                label="Contact"
                to="/contact"
                onClick={() => setShowNavBar(false)}
              />
              <CustomNavlink
                label="Login"
                to="/login"
                onClick={() => setShowNavBar(false)}
              />
            </ul>
            <div className="">
              <Link to="/signup" className="btn btn-outline-primary-dark">
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
