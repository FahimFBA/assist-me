import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";

const ResetPassword = () => {
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
                    to="index.html"
                    className="icon bg-gradient-3 text-white w-12 h-12 rounded p-3 border border-white border-opacity-10 d-flex align-center justify-center ms-auto"
                  >
                    <GrFormClose strokeWidth={2} />
                  </Link>
                </div>
                <div className="account-wrapper h-full d-flex flex-column justify-center">
                  <div className="text-center">
                    <div className="mb-4 text-start d-flex align-center gap-2">
                      <Link
                        to="/login"
                        className="btn btn-sm p-0 d-flex align-center text-decoration-none w-8 h-8 justify-center"
                      >
                        <FaArrowLeft strokeWidth={2} />
                      </Link>
                      <p className="lead fw-normal mb-0">Enter new password</p>
                    </div>
                    <form action="#" className="vstack gap-4">
                      <div className="text-start">
                        <div className="input-group with-icon">
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              viewBox="0 0 24 24"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <path d="M12 3a12 12 0 0 0 8.5 3A12 12 0 0 1 12 21 12 12 0 0 1 3.5 6 12 12 0 0 0 12 3" />
                              <circle cx="12" cy="11" r="1" />
                              <path d="M12 12v2.5" />
                            </svg>
                          </span>
                          <input
                            type="password"
                            className="form-control rounded-2 py-4"
                            placeholder="New password"
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

export default ResetPassword;
