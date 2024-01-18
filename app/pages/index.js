import Header from "../components/Header";
import PotCard from "../components/PotCard";
import Table from "../components/Table";
import style from "../styles/Home.module.css";
import { useMemo } from "react";
import Footer from "../components/Footer";
import { ConnectionProvider } from "@solana/wallet-adapter-react";
import { WalletProvider } from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { AppProvider } from "../context/context";
import Head from 'next/head'
import { useAppContext } from "../context/context";
require ("@solana/wallet-adapter-react-ui/styles.css")


export default function Home() {
  const endpoint="https://young-floral-firefly.solana-devnet.quiknode.pro/1cc01919649c29707ad4303bbbbb41214e73c37b/";
  const context = useAppContext()
  
  const wallets = useMemo(()=>[
    new PhantomWalletAdapter(),
  ],[])
  return (
      <ConnectionProvider endpoint={endpoint} className={`${style.wrapper} w-[99.2vw] bg-blue-500`}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <AppProvider>
        <Head>
        <title>Solana Lottery Dapp</title>
        <link rel="shortcut icon" href="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/solana-sol-icon.png" />
      </Head>
        <Header />
        <PotCard />
        <Table />
        <Footer/>
          </AppProvider>
      </WalletModalProvider>
      </WalletProvider>
      </ConnectionProvider>
    
  );
}
