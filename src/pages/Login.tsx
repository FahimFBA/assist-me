import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IUserSignInData } from "../types/interface";
import { useEmailLoginMutation, useGoogleSignupMutation } from "../store";
import { toast } from "react-toastify";
import { FaLock, FaRegEnvelope, FaApple } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { LuApple, LuChrome } from "react-icons/lu";
import InputField from "../components/InputField";
import Logo from "../components/Logo";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login: React.FC = () => {
  const initialState: IUserSignInData = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [data, setData] = useState(initialState);
  const [emailLogin] = useEmailLoginMutation();
  const [googleSignup] = useGoogleSignupMutation();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setData({ ...data, [e.target.name]: e.target.value });
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await toast
      .promise(emailLogin(data).unwrap(), {
        pending: "Logging in...",
        success: "Login successful",
        error: "Login failed",
      })
      .then(() => setData(initialState))
      .then(() => navigate("/profile-page"))
      .catch((err) => toast.error(err));
  };
  const GoogleAuth = async () =>
    await toast
      .promise(googleSignup(null).unwrap(), {
        pending: "Creating user...",
        success: "Successfully created user!",
        error: "Could not create user!",
      })
      .then(() => navigate("/profile-page"))
      .catch((err) => toast.error(err));
  return (
    <>
      <div
        className="wrapper d-flex flex-column justify-between"
        style={{ marginTop: "80px", marginBottom: "40px", display: "none" }}
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
                      <span className="text-primary-dark">AssistMe</span>{" "}
                      Personalized Assistant Tool
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
                      <Link to="/">
                        <Logo />
                      </Link>
                      <div className="vstack gap-4 mt-10">
                        <button
                          onClick={GoogleAuth}
                          type="button"
                          className="btn account-btn py-4"
                        >
                          <FcGoogle strokeWidth={1.5} size={20} />{" "}
                          <span>Continue With Google</span>
                        </button>
                        <button type="button" className="btn account-btn py-4">
                          <FaApple size={23} strokeWidth={1.5} />
                          <span>Continue With Apple</span>
                        </button>
                      </div>
                      <div className="divider-with-text my-10">
                        <span>Or sign in with email</span>
                      </div>
                      <form onSubmit={onSubmit} className="vstack gap-4">
                        <InputField
                          type="email"
                          placeholder="Enter Your Email"
                          name="email"
                          value={data.email}
                          onChange={handleChange}
                          icon={<FaRegEnvelope strokeWidth={1.5} />}
                        />
                        <InputField
                          type="password"
                          placeholder="Password"
                          name="password"
                          value={data.password}
                          onChange={handleChange}
                          icon={<FaLock strokeWidth={1.5} />}
                        />
                        <div className="form-text mt-2">
                          <Link
                            to="/forgot-password"
                            className="text-decoration-none"
                          >
                            Forgot Password?
                          </Link>
                        </div>
                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-primary-dark w-full py-4"
                          >
                            Sign In with AssistMe
                          </button>
                        </div>
                        <div className="text-center">
                          <p>
                            Don't have an account?{" "}
                            <Link to="/signup" className="text-decoration-none">
                              Sign Up for Free
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

      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-sm rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200 dark:border-gray-700">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-zinc-500 dark:text-zinc-400">
              By logging in, you accept our
              <Link className="text-blue-500 hover:text-blue-700" to="#">
                terms
              </Link>
              and
              <Link className="text-blue-500 hover:text-blue-700" to="#">
                privacy policy
              </Link>
              .{"\n                            "}
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                name="email"
                onChange={handleChange}
                value={data?.email}
              />

              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="******"
                required
                type="password"
                name="password"
                onChange={handleChange}
                value={data?.password}
              />
            </div>

            <div className="flex items-center space-x-2">
              <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
              <span className="text-zinc-400 dark:text-zinc-300 text-sm">
                OR
              </span>
              <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
            </div>
            <Button
              className="w-full bg-[#4285F4] text-white"
              variant="outline"
            >
              <div
                onClick={GoogleAuth}
                className="flex items-center justify-center"
              >
                <LuChrome className="w-5 h-5 mr-2" />
                Login with Google
              </div>
            </Button>
            <Button className="w-full bg-black text-white" variant="outline">
              <div className="flex items-center justify-center">
                <LuApple className="w-5 h-5 mr-2" />
                Login with Apple
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
