import { useState } from "react";
import InputField from "../../components/InputField";

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
    <form>
      x
      <InputField
        name="name"
        onChange={handleInputChange}
        placeholder="Your First Name"
        type="text"
        value={data?.name}
        className=""
        icon={<div>N</div>}
      />
      x
      <InputField
        name="firstName"
        onChange={handleInputChange}
        placeholder="Your Last Name"
        type="text"
        value={data?.firstName}
        className=""
        icon={<div>N</div>}
      />
      x
      <InputField
        name="lastName"
        onChange={handleInputChange}
        placeholder="Your Last Name"
        type="text"
        value={data?.lastName}
        className=""
        icon={<div>N</div>}
      />
      x
      <InputField
        name="universityName"
        onChange={handleInputChange}
        placeholder="Your university Name"
        type="text"
        value={data?.universityName}
        className=""
        icon={<div>N</div>}
      />
    </form>
  );
};

export default DetailsPage;
