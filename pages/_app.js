import "../styles/globals.css";
import Navbar from "./navbar";
import "../styles/navbar.module.css";
import LoginForm from "./landing/loginForm";
import Footer from "./footer";
import DoctorLoginForm from "./landing/doctorLoginForm";
import Home from "./index"
import HospitalLoginForm from "./landing/hospitalLoginForm";
import Landing from "./landing/landing"

function MyApp() {
  return (
    <>
      <Home />
      <Navbar />
      <Landing />
      <HospitalLoginForm />
      <Footer />
      <script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></script>
      {/* <script src="https://unpkg.com/flowbite@1.4.7/dist/datepicker.js"></script> */}
    </>
  );
}

export default MyApp;
