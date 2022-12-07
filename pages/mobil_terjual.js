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

export default function DetailBerita() {
	const router = useRouter();

  return (
    <>
  	<Head>
       <title>Mobil Terjual</title>
       <meta name="description" />
       <link rel="icon" href="/logo_bdl.png" />
    </Head>
    <Navbar />

    <div className={`container-fluid ${style.bg} py-5`}>
      <h4 className="text-center">MOBIL TERJUAL DI BDL MOBILINDO</h4>
    </div>

    <div className="container mb-5">
      <h4 className="text-center my-5">MOBIL TERJUAL</h4>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src="images/mobil.png" className="card-img-top" alt="Mobil"/>
            <div className="card-body">
              <h5 className="card-title">TOYOTA 2019</h5>
              <p className="card-text">2018 | MANUAL TRANSMISSION | 1300 CC | KM 130.00</p>
              <p><strong>Rp. 132.000.000</strong></p>
              <button type="button" className="btn btn-danger" disabled>
              TERJUAL
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="images/mobil.png" className="card-img-top" alt="Mobil"/>
            <div className="card-body">
              <h5 className="card-title">TOYOTA 2019</h5>
              <p className="card-text">2018 | MANUAL TRANSMISSION | 1300 CC | KM 130.00</p>
              <p><strong>Rp. 132.000.000</strong></p>
              <button type="button" className="btn btn-danger" disabled>
              TERJUAL
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="images/mobil.png" className="card-img-top" alt="Mobil"/>
            <div className="card-body">
              <h5 className="card-title">TOYOTA 2019</h5>
              <p className="card-text">2018 | MANUAL TRANSMISSION | 1300 CC | KM 130.00</p>
              <p><strong>Rp. 132.000.000</strong></p>
              <button type="button" className="btn btn-danger" disabled>
              TERJUAL
              </button>
            </div>
          </div>
        </div>   
      </div>
      <h4 className="text-center my-5">MOBIL TERBOOKING</h4>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src="images/mobil.png" className="card-img-top" alt="Mobil"/>
            <div className="card-body">
              <h5 className="card-title">TOYOTA 2019</h5>
              <p className="card-text">2018 | MANUAL TRANSMISSION | 1300 CC | KM 130.00</p>
              <p><strong>Rp. 132.000.000</strong></p>
              <button type="button" className="btn btn-danger" disabled>
              TERBOOKING
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="images/mobil.png" className="card-img-top" alt="Mobil"/>
            <div className="card-body">
              <h5 className="card-title">TOYOTA 2019</h5>
              <p className="card-text">2018 | MANUAL TRANSMISSION | 1300 CC | KM 130.00</p>
              <p><strong>Rp. 132.000.000</strong></p>
              <button type="button" className="btn btn-danger" disabled>
              TERBOOKING
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="images/mobil.png" className="card-img-top" alt="Mobil"/>
            <div className="card-body">
              <h5 className="card-title">TOYOTA 2019</h5>
              <p className="card-text">2018 | MANUAL TRANSMISSION | 1300 CC | KM 130.00</p>
              <p><strong>Rp. 132.000.000</strong></p>
              <button type="button" className="btn btn-danger" disabled>
              TERBOOKING
              </button>
            </div>
          </div>
        </div>   
      </div>
    </div>

    <Footer/>
    </>
  )
}