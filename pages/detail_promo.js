import { useState } from "react";
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
// Component
import Navbar from "../components/customer/Navbar";
import Footer from "../components/customer/Footer";
//CSS
import style from "../styles/berita.module.css";

export default function DetailPromo() {
	const router = useRouter();

  return (
    <>
  	<Head>
       <title>Detail Promo</title>
       <meta name="description" />
       <link rel="icon" href="/logo_bdl.png" />
    </Head>
    <Navbar />

    <div className={`container-fluid ${style.bg} py-5`}>
      <h4 className="text-center">PROMO BDL MOBILINDO</h4>
    </div>

    <div className="row g-4 m-0 ms-5 mt-4">
    <div className="col-md-8">
      <h3 className="pb-4 mb-2 text-center">
        PROMO HARI INI
      </h3>
     
      <h4 className="mt-5">
        Syarat & Ketentuan CUAN HOKI BDL Mobilindo
      </h4>

      <img className="img-fluid mt-4" src="/images/promoList.png" alt="images" />

      <p className="mt-4">
        Periode promosi 1-31 Maret 2022. Konsumen dapat melakukan transaksi berulang selama periode promosi 
        berlangsung. Cashback tidak berlaku untuk cara pembayaran transfer.. Konsumen yang melakukan 
        pembatalan order / retur tidak akan mendapatkan Cashback. Cashback tidak berlaku untuk kelipatan dan 
        akumulasi transaksi. Hanya berlaku untuk konsumen yang telah melakukan pembayaran LUNAS selama periode 
        promo berlangsung
      </p>

    </div>

    <div className="col-md-4">
      <div className="sticky-top overflow-auto">
        <div className="p-4">
          <h4 className="">Promo Untukmu</h4>
          <div className="d-flex flex-column mb-3">
            <div className="d-flex mb-5">
              <div className="flex-shrink-0">
                <img src="/images/promoSide.png" alt="gambar"/>
              </div>
              <div className="ms-2 text-bold mt-auto">
                <strong>cashback 25%....</strong>
              </div>  
            </div>
            <div className="d-flex mb-5">
              <div className="flex-shrink-0">
                <img src="/images/promoSide.png" alt="gambar"/>
              </div>
              <div className="ms-2 text-bold mt-auto">
                <strong>cashback 25%....</strong>
              </div>  
            </div>
            <div className="d-flex mb-5">
              <div className="flex-shrink-0">
                <img src="/images/promoSide.png" alt="gambar"/>
              </div>
              <div className="ms-2 text-bold mt-auto">
                <strong>cashback 25%....</strong>
              </div>  
            </div>
            <div className="d-flex mb-5">
              <div className="flex-shrink-0">
                <img src="/images/promoSide.png" alt="gambar"/>
              </div>
              <div className="ms-2 text-bold mt-auto">
                <strong>cashback 25%....</strong>
              </div>  
            </div>
            <div className="d-flex mb-5">
              <div className="flex-shrink-0">
                <img src="/images/promoSide.png" alt="gambar"/>
              </div>
              <div className="ms-2 text-bold mt-auto">
                <strong>cashback 25%....</strong>
              </div>  
            </div>
            
          </div>
        </div>

        
      </div>
    </div>
  </div>

    <Footer/>
    </>
  )
}