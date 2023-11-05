import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div
      className="wrapper d-flex flex-column justify-between"
      style={{
        marginTop: "80px",
        marginBottom: "40px",
      }}
    >
      <main className="flex-grow-1">
        <section className="account-section password-reset-page py-6 h-full">
          <div className="container-fluid h-full">
            <div className="row h-full">
              <div
                className="col-lg-6 d-none d-lg-block"
                data-aos="fade-up-sm"
                data-aos-delay="50"
              >
                <div className="bg-dark-blue-4 border rounded-4 h-full p-6 p-md-20 text-center d-flex flex-column justify-center">
                  <h2 className="text-white mb-12">
                    Unlock the Power of <br className="d-none d-xl-block" />
                    <span className="text-primary-dark">GenAI</span> Copywriting
                    Tool
                  </h2>
                  <img
                    src="/images/screens/screen-5.png"
                    alt=""
                    className="img-fluid w-full"
                  />
                </div>
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-up-sm"
                data-aos-delay="100"
              >
                <div className="close-btn">
                  <Link
                    to="/"
                    className="icon bg-gradient-3 text-white w-12 h-12 rounded p-3 border border-white border-opacity-10 d-flex align-center justify-center ms-auto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <g
                        stroke="currentColor"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                        stroke-width="2"
                      >
                        <path d="M18 6 6 18M6 6l12 12" />
                      </g>
                    </svg>
                  </Link>
                </div>
                <div className="account-wrapper h-full d-flex flex-column justify-center">
                  <div className="text-center">
                    <div className="mb-4 text-start d-flex align-center gap-2">
                      <Link
                        to="/login"
                        className="btn btn-sm p-0 d-flex align-center text-decoration-none w-8 h-8 justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <g
                            stroke="currentColor"
                            stroke-linecap="round"
                            strokeLinejoin="round"
                            stroke-width="1.5"
                          >
                            <path d="M5 12h14M5 12l4 4m-4-4 4-4" />
                          </g>
                        </svg>
                      </Link>
                      <p className="lead fw-normal mb-0">
                        Password Reset Request
                      </p>
                    </div>
                    <form action="#" className="vstack gap-4">
                      <div className="text-start">
                        <div className="input-group with-icon">
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18"
                            >
                              <g
                                stroke="currentColor"
                                stroke-linecap="round"
                                strokeLinejoin="round"
                                stroke-width="1.2"
                              >
                                <path d="M2.25 5.25a1.5 1.5 0 0 1 1.5-1.5h10.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5v-7.5Z" />
                                <path d="M2.25 5.25 9 9.75l6.75-4.5" />
                              </g>
                            </svg>
                          </span>
                          <input
                            type="email"
                            className="form-control rounded-2 py-4"
                            placeholder="Enter Your Email"
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-primary-dark w-full py-4"
                        >
                          Reset Password
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ForgotPassword;
