import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Landing from "../components/landing";

import AdminSidebar from '../components/adminComponents/adminSidebar'

export default function Home() {
  return (
    <div class="h-full w-full">
      <Navbar />
      <Landing />
      <Footer />
      <script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></script>
      
    </div>
  );
}
