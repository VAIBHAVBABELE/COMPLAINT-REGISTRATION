import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useAddress,useContract,useContractRead } from "@thirdweb-dev/react";
import Header from "./components/Header";
import Complaint from "./components/Complaint";
import Status from "./components/Status";
import Admin from "./components/Admin";


export default function Home() {
const address =useAddress();
const { contract } =useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT);
  return (
    <>
      <Head>
        <title>Complaint registration</title>
        <meta name="description" content="this is a complaint filing app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Complaint/>
      <Status/>

      <Admin/>
      
    </>
  )
}
