import { useSelector, useDispatch } from "react-redux";
import { RootState, clearToken, useGetAllEmailsQuery } from "../../store";
import { useNavigate } from "react-router-dom";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
      {/*  */}
      <div className="d-flex justify-center gap-2 my-5">
        <button className="btn btn-primary">Single Email</button>
        <button className="btn btn-secondary">Bulk Email</button>
        <button
          onClick={() => dispatch(clearToken())}
          className="btn btn-secondary"
        >
          Signout
        </button>
      </div>
      <Table className="w-full rounded-md border">
        <TableHeader>
          <TableRow>
            <TableHead className="col-span-2">Time</TableHead>
            <TableHead className="col-span-2">Sender</TableHead>
            <TableHead className="col-span-8">Message</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item, index: number) => (
            <TableRow key={index}>
              <TableCell>sdjncsdkjn</TableCell>
              <TableCell>{item?.senderName}</TableCell>
              <TableCell>{item?.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Inbox;
