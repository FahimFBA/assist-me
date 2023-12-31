import { useEffect } from "react";
import {
  Home,
  Signup,
  Login,
  ResetPassword,
  ForgotPassword,
  ErrorPage,
  Pricing,
  UseCases,
  Contact,
  Tasks,
  Email,
  Inbox,
  Templates,
  DetailsPage,
  ProfilePage,
  VerifyEmail,
  ActivityLogs,
  InboxDetails,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase-config";
import { loginSuccess, logoutSuccess } from "./store";
import {
  AuthenticationRoutes,
  ProtectedRoutes,
  EmailProtectedRoutes,
  DashboardProtectedRoutes,
} from "./pages/utils";
// import { getAuth } from "firebase/auth";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // under the config there is all the browser details like chrome, platform, web/mobile etc.
    // console.log("getAuth()", getAuth());

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        const photoURL = user.photoURL as string;
        const name = user.displayName as string;
        const email = user.email as string;
        const emailVerified = user.emailVerified;
        // console.log("user", user);
        dispatch(
          loginSuccess({
            uid,
            photoURL,
            name,
            email,
            emailVerified: emailVerified,
          }),
        );
      } else {
        dispatch(logoutSuccess());
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthenticationRoutes />}>
          {/* General pages */}
          <Route path="/" element={<Home />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          {/* Authentication pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/activity-logs" element={<ActivityLogs />} />
          <Route path="/email" element={<Email />} />
        </Route>

        <Route element={<DashboardProtectedRoutes />}>
          <Route path="/profile-page" element={<ProfilePage />} />
          <Route path="/details-page" element={<DetailsPage />} />
        </Route>

        <Route element={<EmailProtectedRoutes />}>
          <Route path="/email-inbox" element={<Inbox />} />
          <Route path="/email-inbox/:id" element={<InboxDetails />} />
          <Route path="/email-templates" element={<Templates />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
