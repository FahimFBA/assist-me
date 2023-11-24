import { useEffect, useState } from "react";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_KEY, CLIENT_ID, DISCOVERY_DOC, SCOPES } from "../CONSTANT";
import { collectTokens } from "../store";
import { useDispatch } from "react-redux";

const Email = () => {
  const navigate = useNavigate();
  const access_token: string = useSelector(
    (state: RootState) => state.tokenData.access_token,
  );

  useEffect(() => {
    if (access_token) {
      navigate("/email-inbox");
    }
  }, [access_token]);

  const dispatch = useDispatch();
  const [data, setData] = useState({});
  // @ts-ignore
  const gapiWindow = window.gapi;

  const initializeGapiClient = async () =>
    await gapiWindow.client.init({
      apiKey: API_KEY,
      discoveryDocs: [DISCOVERY_DOC],
    });

  const gisLoaded = () =>
    // @ts-ignore
    window.google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: "", // defined later
    });

  const handleAuthClick = async () => {
    // @ts-ignore
    data?.requestAccessToken({ prompt: "consent" });

    // @ts-ignore
    data.callback = async (resp) => {
      if (resp.error !== undefined) {
        throw resp; // Throw an error if there is an error in the response
      }
      dispatch(collectTokens(resp));
      // collectTokens
      // console.log("this is callbackl", resp);
    };
  };

  useEffect(() => {
    gapiWindow.load("client", initializeGapiClient);
    setData(gisLoaded());
  }, []);

  if (!access_token) {
    return (
      <div>
        <button className="btn btn-primary" onClick={handleAuthClick}>
          Authenticate Email
        </button>
      </div>
    );
  }

  return <div className="">Redirecting, please wait....</div>;
};

export default Email;
