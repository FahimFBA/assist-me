import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IUserSignInData } from "../types/interface";
import { useEmailSignupMutation, useGoogleSignupMutation } from "../store";
import { toast } from "react-toastify";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LuChrome } from "react-icons/lu";

const Signup: React.FC = () => {
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
        success: "User created successfully! Plesae verify your email",
        error: "Error creating user",
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
      .then((res) => console.log(res))
      .then(() => navigate("/profile-page"))
      .catch((err) => toast.error(err));

  return (
    <div className="bg-primary-foreground min-h-screen flex items-center justify-center">
      <div className="max-w-sm rounded-lg shadow-lg bg-primary-foreground p-6 space-y-6 border border-gray-200 dark:border-gray-700">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Signup</h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            By Signing up, you accept our{" "}
            <Link className="text-blue-500 hover:text-blue-700" to="/login">
              terms
            </Link>{" "}
            and{" "}
            <Link className="text-blue-500 hover:text-blue-700" to="/login">
              privacy policy
            </Link>
          </p>
        </div>
        <div className="space-y-4">
          <form onSubmit={onSubmit} className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="m@example.coxxm"
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
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
          <div className="flex items-center space-x-2">
            <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
            <span className="text-zinc-400 dark:text-zinc-300 text-sm">OR</span>
            <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
          </div>
          <Button
            onClick={GoogleAuth}
            className="w-full bg-[#4285F4] text-white"
            variant="outline"
          >
            <div className="flex items-center justify-center">
              <LuChrome className="w-5 h-5 mr-2" />
              Login with Google
            </div>
          </Button>
          <Button
            onClick={() => navigate("/login")}
            variant="link"
            className="flex gap-1 w-full"
          >
            <span>Have an account?</span>
            <span className="text-blue-500">Login</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
