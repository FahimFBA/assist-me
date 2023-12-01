import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { auth, db, googleProvider } from "../../config/firebase-config";
import {
  createUserWithEmailAndPassword,
  UserCredential,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  confirmPasswordReset,
  sendPasswordResetEmail,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { IUserSignInData, IUpdateUser } from "../../types/interface";
import { addDoc, collection } from "firebase/firestore";

const usersCollectionName = "users";

export const userAuthAPI = createApi({
  reducerPath: "userAuthAPI",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    logout: builder.mutation<void, null>({
      queryFn: async () => {
        try {
          await signOut(auth);
          return {
            data: undefined,
          };
        } catch (err) {
          return {
            error: (err as Error)?.message,
          };
        }
      },
      invalidatesTags: ["User"],
    }),
    emailSignup: builder.mutation<UserCredential, IUserSignInData>({
      queryFn: async (user: IUserSignInData) => {
        try {
          const { email, password } = user;
          const response: UserCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password,
          );

          await addDoc(collection(db, usersCollectionName), {
            uid: response?.user?.uid,
            displayName: response?.user?.displayName,
            firstName: "",
            lastName: "",
            universityName: "",
            department: "",
            major: "",
            studentID: "",
            phoneNumber: response?.user?.phoneNumber,
            photoURL: response?.user?.photoURL,
          }).then(() => {
            // @ts-ignore
            sendEmailVerification(auth.currentUser);
          });

          return {
            data: response,
          };
        } catch (err) {
          return {
            error: (err as Error)?.message,
          };
        }
      },
      invalidatesTags: ["User"],
    }),
    sendEmailVerification: builder.mutation<void, null>({
      queryFn: async () => {
        try {
          // @ts-ignore
          await sendEmailVerification(auth.currentUser);
          return {
            data: undefined,
          };
        } catch (err) {
          return {
            error: (err as Error)?.message,
          };
        }
      },
    }),
    emailLogin: builder.mutation<UserCredential, IUserSignInData>({
      queryFn: async (user: IUserSignInData) => {
        try {
          const { email, password } = user;
          const response: UserCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password,
          );

          await addDoc(collection(db, usersCollectionName), {
            uid: response?.user?.uid,
            displayName: response?.user?.displayName,
            firstName: "",
            lastName: "",
            universityName: "",
            department: "",
            major: "",
            studentID: "",
            phoneNumber: response?.user?.phoneNumber,
            photoURL: response?.user?.photoURL,
          });

          return {
            data: response,
          };
        } catch (err) {
          return {
            error: (err as Error)?.message,
          };
        }
      },
      invalidatesTags: ["User"],
    }),
    googleSignup: builder.mutation<UserCredential, null>({
      queryFn: async () => {
        try {
          const response = await signInWithPopup(auth, googleProvider);
          return {
            data: response,
          };
        } catch (err) {
          return {
            error: (err as Error)?.message,
          };
        }
      },
      invalidatesTags: ["User"],
    }),

    sendResetPassWordEmail: builder.mutation<
      string,
      {
        email: string;
      }
    >({
      queryFn: async ({ email }) => {
        try {
          await sendPasswordResetEmail(auth, email, {
            url: "http://localhost:5173/login",
          });
          return {
            data: "Password reset link sent to your email",
          };
        } catch (err) {
          return {
            error: (err as Error)?.message,
          };
        }
      },
      invalidatesTags: ["User"],
    }),

    setNewPassWord: builder.mutation<
      string,
      {
        oobCode: string;
        password: string;
      }
    >({
      queryFn: async ({ oobCode, password }) => {
        await confirmPasswordReset(auth, oobCode, password);
        try {
          return {
            data: "Successfully reset Password",
          };
        } catch (err) {
          return {
            error: (err as Error)?.message,
          };
        }
      },
      invalidatesTags: ["User"],
    }),
    // update user profile
    updateUserProfile: builder.mutation<
      IUpdateUser,
      Pick<IUpdateUser, "name" | "photoURL">
    >({
      queryFn: async ({ name, photoURL }) => {
        try {
          const user = auth.currentUser;
          if (user) {
            // Update the user's profile with the provided name and photoURL
            await updateProfile(user, { displayName: name, photoURL });
          }
          return {
            data: {
              name,
              photoURL,
              email: user?.email,
              uid: user?.uid,
            } as IUpdateUser,
          };
        } catch (err) {
          return {
            error: (err as Error)?.message,
          };
        }
      },
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useEmailSignupMutation,
  useEmailLoginMutation,
  useGoogleSignupMutation,
  useLogoutMutation,
  useSendResetPassWordEmailMutation,
  useSetNewPassWordMutation,
  useUpdateUserProfileMutation,
  useSendEmailVerificationMutation,
} = userAuthAPI;
