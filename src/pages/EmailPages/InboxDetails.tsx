import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetOneEmailQuery } from "@/store";

const InboxDetails = () => {
  const access_token = useSelector(
    (state: RootState) => state.tokenData.access_token,
  );
  const { id } = useParams();

  const { data, isLoading, isError, isFetching } = useGetOneEmailQuery({
    x: "messages",
    id,
    access_token,
  });

  if (isFetching || isLoading) return <div>Loading please wait...</div>;

  if (isError) return <div>Error occured</div>;

  console.log(data);

  // @ts-ignore
  const From = data.payload.headers.find((header) => header.name === "From")
    .value as string;

  // @ts-ignore
  const To = data.payload.headers.find((header) => header.name === "To")
    .value as string;

  // @ts-ignore
  const Subject = data.payload.headers.find(
    // @ts-ignore
    (header) => header.name === "Subject",
  ).value as string;

  const Message = data?.snippet;

  return (
    <div>
      <h4 className="font-bold">From : {From}</h4>
      <h4 className="font-bold">To : {To}</h4>
      <h4 className="font-bold">Subject : {Subject}</h4>

      <h6 className="my-4">Message</h6>
      <p>{Message}</p>
    </div>
  );
};

export default InboxDetails;
