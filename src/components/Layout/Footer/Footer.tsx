import {
  FaLocationArrow,
  FaGithub,
  FaDribbble,
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Logo from "../../Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row g-10">
          <div className="col-lg-9 col-xl-8 order-lg-2">
            <div className="row g-6">
              <div className="col-md-4 col-lg-4">
                <div className="footer-widget text-center text-md-start">
                  <h6 className="text-white mb-2">AssistMe</h6>
                  <ul className="link-list list-unstyled mb-0">
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="login.html">Sign in</a>
                    </li>
                    <li>
                      <a href="register.html">Register</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="footer-widget text-center text-md-start">
                  <h6 className="text-white mb-2">Use Cases</h6>
                  <ul className="link-list list-unstyled mb-0">
                    <li>
                      <a href="use-cases-details.html">AI writer</a>
                    </li>
                    <li>
                      <a href="use-cases-details.html">Businesses AI</a>
                    </li>
                    <li>
                      <a href="use-cases-details.html">AI Blog writer</a>
                    </li>
                    <li>
                      <a href="use-cases-details.html">AI Content Creator</a>
                    </li>
                    <li>
                      <a href="use-cases-details.html">Article write</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="footer-widget text-center text-md-start">
                  <h6 className="text-white mb-4">News & Update</h6>
                  <form action="#">
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                      <button
                        className="btn btn-primary-dark px-4"
                        type="button"
                      >
                        <FaLocationArrow strokeWidth={1.5} />
                      </button>
                    </div>
                  </form>
                  <ul className="list-unstyled d-flex flex-wrap align-center justify-center justify-md-start gap-3 social-list mb-0 mt-5">
                    <li>
                      <a href="#">
                        <FaGithub strokeWidth={1.5} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaDribbble strokeWidth={1.5} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaFacebookSquare strokeWidth={1.5} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter strokeWidth={1.5} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram strokeWidth={1.5} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 order-lg-1 me-auto">
            <div className="footer-widget text-center text-lg-start">
              <Link to="/">
                <Logo />
              </Link>
              <p className="fs-sm mb-0 mt-4">
                A Magical Tool to Optimize you content for the first know who
                you're targeting. Identify your target audience.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center py-6 mt-8">
          <p className="fs-sm mb-0">
            Copyright <span className="text-primary-dark">GenAI</span>. Design
            By Marvel_Theme
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
