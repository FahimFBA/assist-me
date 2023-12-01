import { Button } from "@/components/ui/button";
import {
  RootState,
  clearToken,
  logoutSuccess,
  useLogoutMutation,
} from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSendEmailVerificationMutation } from "@/store";

const VerifyEmail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userUID = useSelector((state: RootState) => state.user.uid);
  const emailVerified = useSelector(
    (state: RootState) => state.user.emailVerified,
  );
  const [sendEmailVerification] = useSendEmailVerificationMutation();
  const [logout] = useLogoutMutation();

  const appSignout = async () => {
    dispatch(clearToken());
    dispatch(logoutSuccess());

    await toast
      .promise(logout(null).unwrap(), {
        pending: "Logging out...",
        success: "Logout successful",
        error: "Logout failed",
      })
      .then(() => navigate("/login"));
  };

  const sendVerificationEmailFn = async () =>
    await toast.promise(sendEmailVerification(null).unwrap(), {
      pending: "Sending verification email...",
      success: "Verification email sent",
      error: "Verification email failed to send",
    });

  useEffect(() => {
    if (emailVerified) {
      navigate("/profile-page");
    }
    if (!userUID) {
      navigate("/login");
    }
  }, [emailVerified, userUID]);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-[300px] md:w-[400px]- rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200 dark:border-gray-700">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Email Verify</h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            Verify Account via email link our team sent you. Then, comeback and
            refresh the page
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-slate-600">Didn't receive an email?</p>
          <Button
            onClick={sendVerificationEmailFn}
            className="w-full"
            variant="default"
          >
            Resend Email
          </Button>
          <Button onClick={appSignout} className="w-full" variant="secondary">
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
