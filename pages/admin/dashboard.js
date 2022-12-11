import { useState, useEffect } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Component
import NavbarAndSidebar from "../../components/admin/NavbarAndSidebar.js";
//CSS
import style from "../../styles/dashboard.module.css";

export default function Dashboard() {
	const router = useRouter();
  const [role, setRole] = useState()

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role) {
      setRole(role);
    }
  }, []);

  return (
    <>
  	<Head>
       <title>Dashboard</title>
       <meta name="description" />
       <link rel="icon" href="/logo_bdl.png" />
    </Head>
    <NavbarAndSidebar>
    { role === "superAdmin" &&
      <div className="row row-cols-2 m-auto g-5 justify-content-center">
        <div className="col-12 col-md-5">
          <div className={`${style.cardDashboard} d-flex align-items-center p-3`}>
            <div className="flex-grow-1">
              <p className="display-6">2</p>
              <p>Total Akun Admin</p>
            </div>
            <div className="">
              <img src="/icons/totalAkunAdmin.svg" alt="gambar"/>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <div className={`${style.cardDashboard} d-flex align-items-center p-3`}>
            <div className="flex-grow-1">
              <p className="display-6">9</p>
              <p>Total Akun Inspektor</p>
            </div>
            <div className="">
              <img src="/icons/akunInspektor.svg" alt="gambar"/>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <div className={`${style.cardDashboard} d-flex align-items-center p-3`}>
            <div className="flex-grow-1">
              <p className="display-6">12</p>
              <p>Jumlah Stok Mobil</p>
            </div>
            <div className="">
              <img src="/icons/stokMobil.svg" alt="gambar"/>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <div className={`${style.cardDashboard} d-flex align-items-center p-3`}>
            <div className="flex-grow-1">
              <p className="display-6">41</p>
              <p>Kali Transaksi</p>
            </div>
            <div className="">
              <img src="/icons/kaliTransaksi.svg" alt="gambar"/>
            </div>
          </div>
        </div>
      </div>
    }
    { role === "inspector" &&
      <div className="row row-cols-2 m-auto g-5 justify-content-center">
        <div className="col-12 col-md-5">
          <div className={`${style.cardDashboard} d-flex align-items-center p-3`}>
            <div className="flex-grow-1">
              <p className="display-6">2</p>
              <p>Jumlah Terinspeksi</p>
            </div>
            <div className="">
              <img src="/icons/terinspeksi.svg" alt="gambar"/>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <div className={`${style.cardDashboard} d-flex align-items-center p-3`}>
            <div className="flex-grow-1">
              <p className="display-6">9</p>
              <p>Jumlah Diinspeksi</p>
            </div>
            <div className="">
              <img src="/icons/diinspeksi.svg" alt="gambar"/>
            </div>
          </div>
        </div>     
      </div>
    }
    { role === "admin" &&
      <div className="row row-cols-2 m-auto g-5 justify-content-center">
        <div className="col-12 col-md-5">
          <div className={`${style.cardDashboard} d-flex align-items-center p-3`}>
            <div className="flex-grow-1">
              <p className="display-6">7</p>
              <p>Mobil Dijual</p>
            </div>
            <div className="">
              <img src="/images/mobilDijual.png" alt="gambar"/>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <div className={`${style.cardDashboard} d-flex align-items-center p-3`}>
            <div className="flex-grow-1">
              <p className="display-6">20</p>
              <p>Jumlah Berita</p>
            </div>
            <div className="">
              <img src="/images/jumlahBerita.png" alt="gambar"/>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <div className={`${style.cardDashboard} d-flex align-items-center p-3`}>
            <div className="flex-grow-1">
              <p className="display-6">8</p>
              <p>Mobil Terbooking</p>
            </div>
            <div className="">
              <img src="/images/mobilTerbooking.png" alt="gambar"/>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <div className={`${style.cardDashboard} d-flex align-items-center p-3`}>
            <div className="flex-grow-1">
              <p className="display-6">4</p>
              <p>Jumlah Promo</p>
            </div>
            <div className="">
              <img src="/images/jumlahPromo.png" alt="gambar"/>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <div className={`${style.cardDashboard} d-flex align-items-center p-3`}>
            <div className="flex-grow-1">
              <p className="display-6">12</p>
              <p>Mobil Terjual</p>
            </div>
            <div className="">
              <img src="/images/mobilTerjual.png" alt="gambar"/>
            </div>
          </div>
        </div>
      </div>
    }
    </NavbarAndSidebar> 
    </>
  )
}