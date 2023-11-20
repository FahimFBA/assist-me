import { useEffect } from "react";
import {
  Home,
  Signup,
  Login,
  ResetPassword,
  ForgotPassword,
  Dashboard,
  ErrorPage,
  Pricing,
  UseCases,
  Contact,
  Tasks,
  Email,
  EmailSuccess,
  EmailPage,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase-config";
import { loginSuccess, logoutSuccess } from "./store";
import { AuthenticationRoutes, ProtectedRoutes } from "./pages/utils";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const photoURL = user.photoURL as string;
        const name = user.displayName as string;
        const email = user.email as string;

        console.log("User is signed in", uid);
        dispatch(
          loginSuccess({
            uid,
            photoURL,
            name,
            email,
          }),
        );
      } else {
        dispatch(logoutSuccess());
      }
    });

    // AOS library
    // window.addEventListener("load", () => );
    AOS.init({
      duration: 800,
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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/email" element={<Email />} />
          <Route path="/email-success/" element={<EmailSuccess />} />
          <Route path="/email-page" element={<EmailPage />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
