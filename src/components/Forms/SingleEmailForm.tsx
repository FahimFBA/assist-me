import InputField3 from "./InputField3";

const SingleEmailForm = ({
  to,
  subject,
  message,
  handleInput,
}: {
  to: string;
  subject: string;
  message: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="grid gap-4 py-4">
      <InputField3
        label="To"
        placeholder="receiver_email@gmail.com"
        type="text"
        onChange={handleInput}
        name="to"
        value={to}
        required
      />
      <InputField3
        label="Subject"
        placeholder="Write the subject here"
        type="text"
        onChange={handleInput}
        name="subject"
        value={subject}
        required
      />
      <InputField3
        label="Message"
        placeholder="Write the message here"
        type="text"
        onChange={handleInput}
        name="message"
        value={message}
        required
      />
    </div>
  );
};

export default SingleEmailForm;
