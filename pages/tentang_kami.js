import { useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
// Component
import Navbar from "../components/customer/Navbar";
import Footer from "../components/customer/Footer";
//CSS
import style from "../styles/promo.module.css";

export default function Promo() {
	const router = useRouter();

  return (
    <>
  	<Head>
       <title>Promo</title>
       <meta name="description" />
       <link rel="icon" href="/logo_bdl.png" />
    </Head>
    <Navbar />

    <div className={`container-fluid ${style.bg} py-5`}>
      <h4 className="text-center">BDL MOBILINDO</h4>
    </div>

    <div className="container mb-5">
      <h4 className="text-center my-5">TENTANG KAMI</h4>
      <div className="row row-cols-1 row-cols-md-2 mt-4 g-4">
        <div className="col mb-3">
          <img src="/images/tentangKami.png" className="img-fluid" alt="gambar" />
        </div>
        <div className="col mb-3">
          <h4 className="border-bottom">TENTANG BDL MOBILINDO</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
            release of Letraset sheets containing Lorem Ipsum passages, and ore recently with desktop 
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="col mb-3">
          <h4 className="border-bottom">Visi</h4>
          <p>
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem 
            Ipsum.
          </p>
        </div>
        <div className="col mb-3">
          <h4 className="border-bottom">Misi</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
            leap into electronic typesetting, remaining.
          </p>
        </div>  
      </div>
    </div>

    <Footer/>
    </>
  )
}