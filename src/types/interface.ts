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

export interface ITokenState {
  accessTokenForGmail: string;
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

export interface IGmailTokenReturnData {
  access_token: string;
  authuser: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}