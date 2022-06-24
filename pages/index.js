import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Icon from '/public/locumlogo.png'


export default function Home() {
  return (
    <Head>
    <title>Locum</title>
    <meta name="description" content="Fastest way to hire a doctor" />
    <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css" />
    <link rel="icon" type="image/png" href={Icon} />
    <script src="https://unpkg.com/flowbite@1.4.7/dist/datepicker.js"></script>
  </Head>
    
  )
}
