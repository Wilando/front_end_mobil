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
      <h4 className="text-center">PROMO BDL MOBILINDO</h4>
    </div>

    <div className="container mb-5">
      <h4 className="text-center my-5">PROMO HARI INI</h4>
      <div className="row row-cols-1 row-cols-md-3 mt-4">
        <div className="col mb-3">
          <img className={`${style.gambarListPromo}`} src="/images/promoList.png" alt="image"/>
          <h6 className="mt-3">Lorem Ipsum is simply dummy text of the printing and ...</h6>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
          </p>
          <Link href="/detail_promo">Selengkapnya</Link>
        </div>
        <div className="col mb-3">
          <img className={`${style.gambarListPromo}`} src="/images/promoList.png" alt="image"/>
          <h6 className="mt-3">Lorem Ipsum is simply dummy text of the printing and ...</h6>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
          </p>
          <Link href="/detail_promo">Selengkapnya</Link>
        </div>
        <div className="col mb-3">
          <img className={`${style.gambarListPromo}`} src="/images/promoList.png" alt="image"/>
          <h6 className="mt-3">Lorem Ipsum is simply dummy text of the printing and ...</h6>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
          </p>
          <Link href="/detail_promo">Selengkapnya</Link>
        </div>
        <div className="col mb-3">
          <img className={`${style.gambarListPromo}`} src="/images/promoList.png" alt="image"/>
          <h6 className="mt-3">Lorem Ipsum is simply dummy text of the printing and ...</h6>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
          </p>
          <Link href="/detail_promo">Selengkapnya</Link>
        </div>
        <div className="col mb-3">
          <img className={`${style.gambarListPromo}`} src="/images/promoList.png" alt="image"/>
          <h6 className="mt-3">Lorem Ipsum is simply dummy text of the printing and ...</h6>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
          </p>
          <Link href="/detail_promo">Selengkapnya</Link>
        </div>
        <div className="col mb-3">
          <img className={`${style.gambarListPromo}`} src="/images/promoList.png" alt="image"/>
          <h6 className="mt-3">Lorem Ipsum is simply dummy text of the printing and ...</h6>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
          </p>
          <Link href="/detail_promo">Selengkapnya</Link>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  )
}