'use client'

import Header from '../components/header'
import Main from "@/components/main";
import Info from "@/components/info";
import DataWeUse from "@/components/dataweuse";
import WhatWeDo from "@/components/whatwedo";
import Asociate from "@/components/asociate";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col bg-white p-2 w-full h-screen">
      <Header />
      <Main />
      <Info />
      <WhatWeDo />
      <DataWeUse />  
      <Asociate />
      <Footer />
    </div>
  );
}
