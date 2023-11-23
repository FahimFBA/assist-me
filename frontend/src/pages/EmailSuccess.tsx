import { useGetGoogleAccessTokenQuery } from "../store";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { collectTokens } from "../store";
import { useNavigate } from "react-router-dom";

const EmailSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Access the 'code' parameter from the URL
  const searchParams = new URLSearchParams(window.location.search);
  const code = searchParams.get("code") as string;

  const { data, isLoading, isFetching, isError, isSuccess } =
    useGetGoogleAccessTokenQuery({ code });

  if (isLoading || isFetching) {
    toast("Loading, Please wait...");
  }
  if (isSuccess) {
    toast.dismiss();
    toast.success("Authentication successful!, Logging you in");
    dispatch(collectTokens(data));
    navigate("/email-inbox");
  }

  if (isError) {
    toast.dismiss();
    toast.dismiss();
    toast.dismiss();
    toast.error("Error fetching token! Try again");
    navigate("/email");
  }

  return (
    <div>
      <p>Checking Auth Status, Please wait,.....</p>
    </div>
  );
};

export default EmailSuccess;
