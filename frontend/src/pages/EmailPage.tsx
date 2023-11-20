import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";
import EmailList from "../components/Email/EmailList";
import { useEffect, useState } from "react";

const EmailPage = () => {
  const [messages, setMessages] = useState<
    {
      senderName: string;
      message: string;
    }[]
  >([]);

  const navigate = useNavigate();
  const access_token = useSelector(
    (state: RootState) => state.tokenData.access_token,
  );

  const loadGmailApi = async () => {
    try {
      const listResponse = await fetch(
        `https://www.googleapis.com/gmail/v1/users/me/messages?access_token=${access_token}`,
      );
      const listData = await listResponse.json();

      const messageIds = listData.messages.map(
        (message: { id: string; threadId: string }) => message.id,
      );

      const updatedMessages = await Promise.all(
        messageIds.map(async (messageId: string) => {
          const messageResponse = await fetch(
            `https://www.googleapis.com/gmail/v1/users/me/messages/${messageId}?access_token=${access_token}`,
          );
          const messageData = await messageResponse.json();

          const message = messageData.snippet; // Use snippet for message content
          const senderName = messageData.payload.headers.find(
            // @ts-ignore
            (header) => header.name === "From",
          ).value;

          return { senderName, message };
        }),
      );
      console.log(updatedMessages);

      setMessages(updatedMessages);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (!access_token) {
    navigate("/email");
  }

  useEffect(() => {
    loadGmailApi();
  }, []);

  return (
    <div>
      <div className="d-flex justify-center gap-2">
        <button className="btn btn-primary">Single Email</button>
        <button className="btn btn-secondary">Bulk Email</button>
      </div>
      {messages?.map((item) => <EmailList {...item} />)}
    </div>
  );
};

export default EmailPage;
