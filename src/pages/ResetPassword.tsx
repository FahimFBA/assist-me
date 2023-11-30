import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { IUserSignInData } from "@/types/interface";
import { useSetNewPassWordMutation } from "@/store";
import { toast } from "react-toastify";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ResetPassword = () => {
  const navigate = useNavigate();
  const initialState: Pick<IUserSignInData, "password"> = {
    password: "",
  };
  const [data, setData] = useState(initialState);

  const oobCode = new URLSearchParams(window.location.search).get(
    "oobCode",
  ) as string;

  const [setNewPassWord] = useSetNewPassWordMutation();

  const handleResetPassword = async (e: FormEvent) => {
    e.preventDefault();
    await toast
      .promise(
        setNewPassWord({
          oobCode,
          password: data.password,
        }).unwrap(),
        {
          pending: "Resetting password...",
          success: "Password Reset successful",
          error: "Failed to reset password!",
        },
      )
      .then(() => setData(initialState))
      .then(() => navigate("/login"))
      .catch((err) => toast.error(err));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setData({ ...data, [e.target.name]: e.target.value });

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-[300px] md:w-[400px] rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200 dark:border-gray-700">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Password Reset</h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Select a strong password of minimum 6 characters
          </p>
        </div>
        <div className="space-y-4">
          <form onSubmit={handleResetPassword} className="space-y-2">
            <Label htmlFor="email">Password</Label>
            <Input
              id="email"
              placeholder="******"
              required
              type="password"
              name="password"
              onChange={handleChange}
              value={data.password}
            />
            <Button type="submit" className="w-full">
              Confirm
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
