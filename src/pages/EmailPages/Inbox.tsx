import { useSelector, useDispatch } from "react-redux";
import {
  RootState,
  clearToken,
  useGetAllEmailsQuery,
  useDeleteOneEmailMutation,
} from "../../store";
import { useNavigate } from "react-router-dom";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import MailDropdown from "@/components/Dropdown/MailDropdown";
import { toast } from "react-toastify";
import { iGetAllEmailProps } from "@/types/interface";

const Inbox = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const access_token = useSelector(
    (state: RootState) => state.tokenData.access_token,
  );

  const { data, isLoading, isError, isFetching } = useGetAllEmailsQuery({
    x: "messages",
    access_token,
  });

  const [deleteOneEmail] = useDeleteOneEmailMutation();

  const handleDelete = async (id: string) =>
    await toast.promise(
      deleteOneEmail({ x: "messages", id, access_token }).unwrap(),
      {
        pending: "Deleting...",
        success: "Deleted successfully",
        error: "Error occured",
      },
    );

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
      <div className="flex justify-center gap-3 my-4">
        <Button variant="default" className="btn btn-primary">
          Single Email
        </Button>
        <Button variant="default" className="btn btn-secondary">
          Bulk Email
        </Button>
        <Button
          variant="destructive"
          onClick={() => dispatch(clearToken())}
          className="btn btn-secondary"
        >
          Signout
        </Button>
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
          {data?.map((item: iGetAllEmailProps, index: number) => (
            <TableRow key={index}>
              <TableCell>{item?.time}</TableCell>
              <TableCell>{item?.senderName}</TableCell>
              <TableCell>{item?.message}</TableCell>
              <TableCell>
                <MailDropdown deleteTask={() => handleDelete(item?.id)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Inbox;
