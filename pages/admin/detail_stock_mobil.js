import { useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Component
import NavbarAndSidebar from "../../components/admin/NavbarAndSidebar.js";
// Css
import style from "../../styles/kelolaAkun.module.css";

export default function DetailAkun() {
  const router = useRouter();
  const { mobil, harga } = router.query;


  return (
    <>
    <Head>
       <title>Riwayat Transaksi Mobil</title>
       <meta name="description" />
       <link rel="icon" href="/logo_bdl.png" />
    </Head>
    <NavbarAndSidebar>
      <div className={`${style.kotakUtama} mt-4 pb-4 mb-4`}>
        <div className={`${style.kotakAtas}`}>
          <div className={`d-flex flex-row justify-content-between align-items-center p-3`}>
            <h6>Kelola Stock Mobil</h6>
          </div>
        </div>
        <div className={`${style.bgSerch} d-flex flex-row justify-content-evenly align-items-center my-4 py-3`}>
            <div className="col-6">
              <input type="text" className="form-control form-control-lg" id="serch" />
            </div>
            <div className="col-3">
              <select className="form-select form-select-lg">
                <option selected></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-primary btn-lg">Cari Mobil</button>
            </div>
        </div>

        <h6 className="ms-3">Halaman Riwayat Transaksi</h6>
        <div className="d-flex flex-column flex-md-row mb-3 mx-5 mt-5">
          <img className="img-fluid w-75" src={`/Mobil/${mobil}-1.jpg`} alt="images" />
          <div className="d-flex flex-column ms-md-5">
            <div><h1>{mobil}</h1></div>
            <div><h5>{harga}</h5></div>
            <div className="mt-4">Pembayaran Transfer</div>
            <div className="mt-2">
              <p>Bukti Pembayaran: </p>
              <img className="img-fluid" src="/images/bukti_transfer.png" alt="bukti_transfer" />
            </div>
          </div>
        </div>

      </div>
    </NavbarAndSidebar> 
    </>
  )
}