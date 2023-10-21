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
