import { useSelector, useDispatch } from "react-redux";
import {
  RootState,
  clearToken,
  useGetAllEmailsQuery,
  useDeleteOneEmailMutation,
  useSendOneEmailMutation,
} from "../../store";
import { useNavigate } from "react-router-dom";
import CreateSingleMail from "@/components/Modal/CreateSingleMail";

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
import { useState } from "react";
import SingleEmailForm from "@/components/Forms/SingleEmailForm";

const Inbox = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const newMailInitialState = {
    to: "",
    subject: "",
    message: "",
  };

  const [newMail, setNewMail] = useState(newMailInitialState);

  const access_token = useSelector(
    (state: RootState) => state.tokenData.access_token,
  );

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewMail({
      ...newMail,
      [e.target.name]: e.target.value,
    });

  const { data, isLoading, isError, isFetching } = useGetAllEmailsQuery({
    x: "messages",
    access_token,
  });

  const [deleteOneEmail] = useDeleteOneEmailMutation();
  const [sendOneEmail] = useSendOneEmailMutation();

  const handleDelete = async (id: string) =>
    await toast.promise(
      deleteOneEmail({ x: "messages", id, access_token }).unwrap(),
      {
        pending: "Deleting...",
        success: "Deleted successfully",
        error: "Error occured",
      },
    );

  const payload = {
    to: "${newMail.to}",
    subject: "${newMail.subject}",
    // Use the RFC822 format for the email body
    body:
      `To: ${newMail.to}\r\n` +
      `Subject: ${newMail.subject}\r\n\r\n` +
      `${newMail.message}`,
  };

  const handleSend = async () => {
    toast
      .promise(
        sendOneEmail({
          x: "messages",
          access_token,
          data: {
            raw: btoa(payload.body), // Convert the RFC822 message to base64
          },
        }).unwrap(),
        {
          pending: "Sending...",
          success: "Sent successfully",
          error: "Error occured",
        },
      )
      .then(() => setNewMail(newMailInitialState));
  };

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
        <CreateSingleMail
          buttonText="Write & Send Email"
          confirmButtonText="Send Email"
          dialogueDescription="Write receiver email ID, mail subject and your message"
          dialogueTitle="Write & Send Email"
          onConfirm={handleSend}
        >
          <SingleEmailForm {...newMail} handleInput={handleInput} />
        </CreateSingleMail>
        {/* <Button variant="default" className="btn btn-secondary">
          Bulk Email
        </Button> */}
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
                <MailDropdown
                  deleteTask={() => handleDelete(item?.id)}
                  // @ts-ignore
                  viewMail={() => navigate(`/email-inbox/${item?.id}`)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Inbox;
