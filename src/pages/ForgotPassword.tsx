import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSendResetPassWordEmailMutation } from "@/store";
import { toast } from "react-toastify";
import { IUserSignInData } from "@/types/interface";

const ForgotPassword = () => {
  const initialState: Pick<IUserSignInData, "email"> = {
    email: "",
  };

  const [data, setData] = useState(initialState);

  const [sendResetPassWordEmail] = useSendResetPassWordEmailMutation();

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    await toast
      .promise(
        sendResetPassWordEmail({
          email: data.email,
        }).unwrap(),
        {
          pending: "Sending email...",
          success: "Email Sent! Please Check your Mail",
          error: "Failed to send email!",
        },
      )
      .then(() => setData(initialState))
      .catch((err) => console.log(err));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setData({ ...data, [e.target.name]: e.target.value });

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-[300px] md:w-[400px] rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200 dark:border-gray-700">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Password Reset</h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Our servers{" "}
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
          <form onSubmit={handlePasswordReset} className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="someone@gmail.com"
              required
              type="email"
              name="email"
              onChange={handleChange}
              value={data.email}
            />
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
