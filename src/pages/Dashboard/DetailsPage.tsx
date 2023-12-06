import { useEffect, useState } from "react";
import InputField2 from "@/components/Forms/InputField2";
import { Button } from "@/components/ui/button";
import {
  RootState,
  useGetProfileDataQuery,
  useUpdateUserProfileMutation,
} from "@/store";
import { useSelector } from "react-redux";
import { IUserData } from "@/types/interface";
import { toast } from "react-toastify";

const DetailsPage = () => {
  const userId = useSelector((state: RootState) => state.user.uid);
  const email = useSelector((state: RootState) => state.user.email);
  const {
    data: profileData,
    isLoading,
    isFetching,
    isError,
  } = useGetProfileDataQuery({
    userId,
  });

  const [data, setData] = useState<IUserData>({
    firstName: "",
    lastName: "",
    department: "",
    displayName: "",
    major: "",
    phoneNumber: "",
    photoURL: "",
    studentID: "",
    uid: "",
    universityName: "",
  });
  console.log(data);

  useEffect(() => {
    setData(profileData as IUserData);
  }, [profileData]);

  const [updateProfile] = useUpdateUserProfileMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  if (isLoading || isFetching)
    return <div className="text-3xl text-center my-5">Loading...</div>;

  if (isError) return <div>Error...</div>;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.promise(updateProfile(data as IUserData).unwrap(), {
      pending: "Updating Profile...",
      success: "Profile Updated Successfully",
      error: "Error Updating Profile",
    });
  };

  return (
    <div className="flex flex-col gap-7 items-center justify-center h-[90vh]">
      <div className="">
        <h1 className="text-center text-2xl font-bold">Profile Details</h1>
        <h6 className="opacity-[0.6] text-center font-light">@{email}</h6>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
        }}
        className="flex flex-col gap-3 max-w-[400px]"
      >
        <InputField2
          name="displayName"
          onChange={handleInputChange}
          placeholder="Display Name"
          type="text"
          value={data?.displayName}
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
        <InputField2
          name="phoneNumber"
          onChange={handleInputChange}
          placeholder="Your Phone Number"
          type="text"
          value={data?.phoneNumber}
          label="Phone Number"
        />
        <InputField2
          name="major"
          onChange={handleInputChange}
          placeholder="Your Major"
          type="text"
          value={data?.major}
          label="Your Major"
        />
        <InputField2
          name="department"
          onChange={handleInputChange}
          placeholder="Your department"
          type="text"
          value={data?.department}
          label="Your department"
        />
        <InputField2
          name="studentID"
          onChange={handleInputChange}
          placeholder="Your studentID"
          type="text"
          value={data?.studentID}
          label="Your studentID"
        />
        <Button type="submit">Edit Details</Button>
      </form>
    </div>
  );
};

export default DetailsPage;
