import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaRegEnvelope } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import PassInputField from "../components/PassInputField";

const ForgotPassword = () => {
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your password reset logic here, e.g., send a reset link to the provided email.
  };

  return (
    <div
      className="wrapper d-flex flex-column justify-between"
      style={{ marginTop: "80px", marginBottom: "40px" }}
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
                      <p className="lead fw-normal mb-0">
                        Password Reset Request
                      </p>
                    </div>
                    <form
                      onSubmit={handlePasswordReset}
                      className="vstack gap-4"
                    >
                      <PassInputField
                        placeholder="Enter Your Email"
                        onChange={handleEmailChange}
                        icon={<FaRegEnvelope strokeWidth={1.5} />}
                      />
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
