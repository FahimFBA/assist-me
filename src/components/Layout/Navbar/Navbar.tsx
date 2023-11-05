import { Link } from "react-router-dom";
import CustomNavlink from "./CustomNavlink";
import { useState } from "react";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);
  const closeNavbar = () => setIsNavbarOpen(false);

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top bg-dark"
      data-bs-theme="dark"
    >
      <div className="container">
        {/* <!-- Logo --> */}
        <Link className="navbar-brand" to="/">
          <img src="/images/logo.svg" alt="" width="165" />
        </Link>

        {/* <!-- Navbar toggler button --> */}
        <button
          className={`navbar-toggler ${isNavbarOpen ? "collapsed" : ""}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded={isNavbarOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        >
          <div className="navbar-toggler-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* <!-- Navbar content --> */}
        <div
          className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
          id="navbarContent"
        >
          <div className="navbar-content-inner ms-lg-auto d-flex flex-column flex-lg-row align-lg-center gap-4 gap-lg-10 p-2 p-lg-0">
            <ul className="navbar-nav gap-lg-2 gap-xl-5">
              <CustomNavlink label="Home" to="/" onClick={closeNavbar} />
              <CustomNavlink
                label="Use Cases"
                to="/use-cases"
                onClick={closeNavbar}
              />
              <CustomNavlink
                label="Pricing"
                to="/pricing"
                onClick={closeNavbar}
              />
              <CustomNavlink
                label="Contact"
                to="/contact"
                onClick={closeNavbar}
              />
              <CustomNavlink label="Login" to="/login" onClick={closeNavbar} />
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
