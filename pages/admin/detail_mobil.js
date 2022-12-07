import { useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Component
import NavbarAndSidebar from "../../components/admin/NavbarAndSidebar.js";
// Css
import style from "../../styles/kelolaAkun.module.css";

export default function DetailMobil() {
  const router = useRouter();
  const { mobil, harga } = router.query;

  return (
    <>
    <Head>
       <title>Detail Mobil</title>
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

        <h6 className="ms-3 mt-5">Detail Mobil</h6>
        <div className="d-flex flex-column mx-5 mt-5">
          <div className="row mb-3">
            <label htmlFor="namaMobil" className="col-sm-2 col-form-label">Nama Mobil</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="namaMobil" value={mobil} disabled/>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="tipe" className="col-sm-2 col-form-label">Tipe</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="tipe" value="1.3 E MT" disabled/>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="tahun" className="col-sm-2 col-form-label">Tahun</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="tahun" value="2014" disabled/>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="transmisi" className="col-sm-2 col-form-label">Tipe Transmisi</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="transmisi" value="Manual Transmission" disabled/>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="harga" className="col-sm-2 col-form-label">Harga</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="harga" value={harga} disabled/>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="cc" className="col-sm-2 col-form-label">CC</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="cc" value="1329" disabled/>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="km" className="col-sm-2 col-form-label">KM</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="km" value="936" disabled/>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="deskripsi" className="col-sm-2 col-form-label">Deskripsi</label>
            <div className="col-sm-10">
              <textarea className="form-control" id="deskripsi" rows="4" value="Pajak On, Mesin Record Dealer, mesin Terawat Halus Seperti Baru, Body Kinclong Tnpa Dempul, Interior Nyaman, Siap Pakai." disabled></textarea>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="gambar" className="col-sm-2 col-form-label">Foto</label>
            <div className="col-sm-10">
              <img src="/images/mobil.png" alt="mobil" />
            </div>
          </div>
        </div>
      </div>
    </NavbarAndSidebar> 
    </>
  )
}