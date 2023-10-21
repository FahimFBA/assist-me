import { useEffect } from "react";
import {
  Home,
  Signup,
  Login,
  ResetPassword,
  ForgotPassword,
  Dashboard,
  ErrorPage,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components/Layout";
import AOS from "aos";

const App = () => {
  useEffect(() => {
    window.addEventListener("load", () =>
      AOS.init({
        duration: 800,
      }),
    );
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
