import { useEffect } from "react";
// import AOS from "aos";

const Navbar = () => {
  useEffect(() => {
    // AOS.init({
    //   duration: 1000, // Set animation duration (in milliseconds)
    // });
  }, []);
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top bg-dark"
      data-bs-theme="dark"
    >
      <div className="container">
        {/* <!-- Logo --> */}
        <a className="navbar-brand" href="index.html">
          <img src="/images/logo.svg" alt="" width="165" />
        </a>

        {/* <!-- Navbar toggler button --> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="navbar-toggler-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* <!-- Navbar content --> */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="navbar-content-inner ms-lg-auto d-flex flex-column flex-lg-row align-lg-center gap-4 gap-lg-10 p-2 p-lg-0">
            <ul className="navbar-nav gap-lg-2 gap-xl-5">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-current="page"
                >
                  Home
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="index.html">
                      Home one
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="index-lite.html">
                      Home one lite
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="index-2.html">
                      Home two
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="index-2-lite.html">
                      Home two lite
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu megamenu megamenu-cols-2">
                  <li>
                    <a className="dropdown-item " href="about.html">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="about-lite.html">
                      About lite
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="contact.html">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="contact-lite.html">
                      Contact lite
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="blog.html">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="blog-lite.html">
                      Blog lite
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="article.html">
                      Article
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="article-lite.html">
                      Article lite
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="use-cases.html">
                      Use cases
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="use-cases-lite.html">
                      Use cases lite
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="use-cases-details.html">
                      Case details
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item "
                      href="use-cases-details-lite.html"
                    >
                      Case details lite
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="pricing-plan.html">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="pricing-plan-lite.html">
                      Pricing lite
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="login.html">
                      Login
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="login-lite.html">
                      Login lite
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="register.html">
                      Register
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="register-lite.html">
                      Register lite
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="forgot-password.html">
                      Forgot password
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="forgot-password-lite.html"
                    >
                      Forgot password lite
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="404.html">
                      404
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="404-lite.html">
                      404 lite
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="use-cases.html">
                  Use cases
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="pricing-plan.html">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="contact.html">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="login.html">
                  Login
                </a>
              </li>
            </ul>
            <div className="">
              <a href="login.html" className="btn btn-outline-primary-dark">
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
