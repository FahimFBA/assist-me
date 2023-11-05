import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IUserSignInData } from "../types/interface";
import { useEmailSignupMutation, useGoogleSignupMutation } from "../store";
import { toast } from "react-toastify";

const Signup = () => {
  const initialState: IUserSignInData = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  const [data, setData] = useState(initialState);

  const [emailSignup] = useEmailSignupMutation();
  const [googleSignup] = useGoogleSignupMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await toast
      .promise(emailSignup(data).unwrap(), {
        pending: "Creating user...",
        success: "User created successfully",
        error: "Error creating user",
      })
      .then(() => setData(initialState))
      .then(() => navigate("/dashboard"))
      .catch((err) => toast.error(err));
  };

  const GoogleAuth = async () =>
    await toast
      .promise(googleSignup(null).unwrap(), {
        pending: "Creating user...",
        success: "Successfully created user!",
        error: "Could not create user!",
      })
      .then((res) => console.log(res))
      .then(() => navigate("/dashboard"))
      .catch((err) => toast.error(err));

  return (
    <div
      className="wrapper d-flex flex-column justify-between"
      style={{
        marginTop: "80px",
        marginBottom: "40px",
      }}
    >
      <main className="flex-grow-1">
        <section className="account-section login-page py-6 h-full">
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
                    <Link to="/">
                      <img
                        src="/images/logo.svg"
                        alt=""
                        className="img-fluid"
                        width="165"
                      />
                    </Link>
                    <div className="vstack gap-4 mt-10">
                      <button
                        onClick={GoogleAuth}
                        type="button"
                        className="btn account-btn py-4"
                      >
                        <img
                          src="/images/icons/google.svg"
                          alt=""
                          width="24"
                          className="img-fluid icon"
                        />
                        <span>Continue With Google</span>
                      </button>
                      <button type="button" className="btn account-btn py-4">
                        <img
                          src="/images/icons/apple.svg"
                          alt=""
                          width="24"
                          className="img-fluid icon"
                        />
                        <span>Continue With Apple</span>
                      </button>
                    </div>

                    <div className="divider-with-text my-10">
                      <span>Or register with email</span>
                    </div>

                    <form onSubmit={onSubmit} className="vstack gap-4">
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
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="text-start">
                        <div className="input-group with-icon">
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              strokeLinejoin="round"
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
                            placeholder="Password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-primary-dark w-full py-4"
                        >
                          Create an account
                        </button>
                      </div>
                      <div className="text-center">
                        <p>
                          Already have an account?
                          <Link to="/login" className="text-decoration-none">
                            {" "}
                            Log in{" "}
                          </Link>
                        </p>
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

export default Signup;
