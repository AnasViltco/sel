import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from "../styles/index.module.css";
import Bankingsoft from './Components/Solutions/Bankingsoft';
import Bannersol from './Components/Solutions/Bannersol';
import Collapseproduct from './Components/Collapseproduct';
import Productup from './Components/Productup';
import Ourclients from './Components/Solutions/Ourclients';
import Letsconnect from './Components/Solutions/Letsconnect';



const inter = Inter({ subsets: ['latin'] })

export default function Bankfinance() {
  return (
    <>
      <Head>
        <title>London Laser</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon icon  */}
        <link rel="icon" href="/favicon.ico" />
        {/* bootstrap v4.0.0 cdn  */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        {/* fontasome V5 cdn  */}
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"/>
      </Head>
      <main className={styles.main_height} >
        <Bankingsoft />
        <Bannersol />
        <Productup />
        <Ourclients />
        <Letsconnect />
      </main>
    </>
  )
}
