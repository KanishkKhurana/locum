import { Html, Head, Main, NextScript } from 'next/document'



export default function Document() {
  return (
    <Html>
      <Head>
<title>Locum</title>
<meta name="description" content="Fastest way to hire a doctor" />
<link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css" />
<link rel="icon" type="image/png" href='/locumlogo.png' />
{/* <script src="https://unpkg.com/flowbite@1.4.7/dist/datepicker.js"></script> */}
</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}