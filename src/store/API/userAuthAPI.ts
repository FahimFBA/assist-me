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
  sendEmailVerification,
} from "firebase/auth";
import {
  IUserSignInData,
  iActivityLogData,
  IUserData,
} from "../../types/interface";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { nanoid } from "@reduxjs/toolkit";
import { getAuth } from "firebase/auth";

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

          const documentName = response?.user?.uid;
          const userDocRef = doc(db, usersCollectionName, documentName);

          await setDoc(userDocRef, {
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

          const logsCollectionRef = collection(userDocRef, "logs");
          const logDocumentName = nanoid();

          await setDoc(doc(logsCollectionRef, logDocumentName), {
            // @ts-ignore
            clientPlatform: getAuth()?.config?.clientPlatform,
            sdkClientVersion: getAuth()?.config?.sdkClientVersion,
            action: "New Account Created With Email",
            time: new Date(),
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

          const collectionName = usersCollectionName;
          const documentName = response?.user?.uid;
          const subCollectionName = "logs";
          const subDocumentName = nanoid();

          const userDocRef = doc(db, collectionName, documentName);
          const logsCollectionRef = collection(userDocRef, subCollectionName);

          await setDoc(doc(logsCollectionRef, subDocumentName), {
            // @ts-ignore
            clientPlatform: getAuth()?.config?.clientPlatform,
            sdkClientVersion: getAuth()?.config?.sdkClientVersion,
            action: "Account Login With Email",
            time: new Date(),
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

          const collectionName = usersCollectionName;
          const documentName = response?.user?.uid;
          const subCollectionName = "logs";
          const subDocumentName = nanoid();

          const userDocRef = doc(db, collectionName, documentName);
          // Check if the user document exists
          const userDocSnapshot = await getDoc(userDocRef);

          if (userDocSnapshot.exists()) {
            const logsCollectionRef = collection(userDocRef, subCollectionName);
            await setDoc(doc(logsCollectionRef, subDocumentName), {
              // @ts-ignore
              clientPlatform: getAuth()?.config?.clientPlatform,
              sdkClientVersion: getAuth()?.config?.sdkClientVersion,
              action: "Account Login with Google",
              time: new Date(),
            });
          } else {
            await setDoc(userDocRef, {
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

            const logsCollectionRef = collection(userDocRef, subCollectionName);
            await setDoc(doc(logsCollectionRef, subDocumentName), {
              // @ts-ignore
              clientPlatform: getAuth()?.config?.clientPlatform,
              sdkClientVersion: getAuth()?.config?.sdkClientVersion,
              action: "New Account Signup with Google",
              time: new Date(),
            });
          }

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

    // get user profile
    getProfileData: builder.query<
      IUserData,
      {
        userId: string;
      }
    >({
      queryFn: async ({ userId }) => {
        try {
          const userDoc = await getDoc(doc(db, usersCollectionName, userId));
          const docData = userDoc.data();

          return {
            data: docData as IUserData,
          };
        } catch (err) {
          return {
            error: (err as Error)?.message,
          };
        }
      },
      providesTags: ["User"],
    }),

    // update user profile
    updateUserProfile: builder.mutation({
      queryFn: async (data: IUserData) => {
        try {
          const findUserDoc = await getDoc(
            doc(db, usersCollectionName, data?.uid),
          );

          if (findUserDoc.exists()) {
            await setDoc(doc(db, usersCollectionName, data?.uid), {
              ...data,
            });
          }

          return {
            data: null,
          };
        } catch (err) {
          return {
            error: (err as Error)?.message,
          };
        }
      },
      invalidatesTags: ["User"],
    }),

    activityLogs: builder.query<
      iActivityLogData[],
      {
        uid: string;
      }
    >({
      queryFn: async ({ uid }) => {
        try {
          const logsCollectionRef = collection(
            db,
            usersCollectionName,
            uid, // this is the name of document
            "logs", // name of subcollection
          );

          const querySnapshot = await getDocs(logsCollectionRef);
          const logsData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          return { data: logsData as iActivityLogData[] };
        } catch (err) {
          return {
            error: (err as Error)?.message,
          };
        }
      },
      providesTags: ["User"],
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
  useActivityLogsQuery,
  useGetProfileDataQuery,
} = userAuthAPI;
