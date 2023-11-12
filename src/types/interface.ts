export interface IUserSignInData {
  email: string;
  password: string;
}

export interface IUpdateUser {
  name: string;
  photoURL: string;
  email: string;
  uid: string;
}

export interface UserState {
  uid: string;
  name: string;
  email: string;
  photoURL: string;
}

export interface ITaskProps {
  id: string;
  title: string;
  description: string;
  status: string;
  deadline: string;
  label: string;
  userOwner: string;
}
