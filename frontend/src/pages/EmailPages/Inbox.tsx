import { useSelector, useDispatch } from "react-redux";
import { RootState, clearToken, useGetAllEmailsQuery } from "../../store";
import { useNavigate } from "react-router-dom";
import EmailList from "../../components/Email/EmailList";

const Inbox = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const access_token = useSelector(
    (state: RootState) => state.tokenData.access_token,
  );

  const { data, isLoading, isError, isFetching } = useGetAllEmailsQuery({
    x: "messages",
    access_token: `${access_token}`,
  });

  console.log("dtaa", data);

  if (!access_token) {
    navigate("/email");
  }

  if (isFetching || isLoading) {
    return <div className="">Loading please wait......</div>;
  }

  if (isError) {
    dispatch(clearToken());
    navigate("/email");
    return <div className="">Error occured</div>;
  }

  return (
    <div>
      <div className="d-flex justify-center gap-2 my-5">
        <button className="btn btn-primary">Single Email</button>
        <button className="btn btn-secondary">Bulk Email</button>
        <button className="btn btn-secondary">Signout</button>
      </div>
      {data?.map((item: any, index: number) => (
        <EmailList key={index} {...item} />
      ))}
    </div>
  );
};

export default Inbox;
