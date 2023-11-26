import { useState } from "react";
import InputField2 from "@/components/Forms/InputField2";
import { Button } from "@/components/ui/button";

const DetailsPage = () => {
  const [data, setData] = useState({
    name: "",
    firstName: "",
    lastName: "",
    universityName: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col gap-7 items-center justify-center h-[90vh]">
      <h1 className="text-2xl font-bold">Profile Details</h1>
      <form
        style={{
          width: "100%",
        }}
        className="flex flex-col gap-3 max-w-[400px]"
      >
        <InputField2
          name="name"
          onChange={handleInputChange}
          placeholder="Display Name"
          type="text"
          value={data?.name}
          label="Display Name"
        />
        <InputField2
          name="firstName"
          onChange={handleInputChange}
          placeholder="Your Last Name"
          type="text"
          value={data?.firstName}
          label="First Name"
        />
        <InputField2
          name="lastName"
          onChange={handleInputChange}
          placeholder="Your Last Name"
          type="text"
          value={data?.lastName}
          label="Last Name"
        />
        <InputField2
          name="universityName"
          onChange={handleInputChange}
          placeholder="Your university Name"
          type="text"
          value={data?.universityName}
          label="university Name"
        />
        <Button>Save</Button>
      </form>
    </div>
  );
};

export default DetailsPage;
