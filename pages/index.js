import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Icon from '/public/locumlogo.png'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Landing from "../components/landing"


export default function Home() {
  return (


<div class="h-full w-full">
<Navbar />
<Landing />
<Footer />
<script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></script>
{/* <script src="https://unpkg.com/flowbite@1.4.7/dist/datepicker.js"></script> */}
</div>
    
  )
}


