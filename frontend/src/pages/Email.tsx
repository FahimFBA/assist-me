import { useEffect } from "react";
import { useStartGmailAuthenticationQuery, RootState } from "../store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Email = () => {
  const navigate = useNavigate();
  const access_token: string = useSelector(
    (state: RootState) => state.tokenData.access_token,
  );

  useEffect(() => {
    if (access_token) {
      navigate("/email-page");
    }
  }, [access_token]);

  const { data, isLoading, isFetching, isError } =
    useStartGmailAuthenticationQuery(null);
  const handleClick = () => {
    window.open(data?.authenticationUrl, "_self");
  };

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!access_token) {
    return (
      <div>
        <button className="btn btn-primary" onClick={handleClick}>
          Authenticate Email
        </button>
      </div>
    );
  }

  return <div className="">Redirecting, please wait....</div>;
};

export default Email;
