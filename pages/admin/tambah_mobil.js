import { useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Component
import NavbarAndSidebar from "../../components/admin/NavbarAndSidebar.js";
// Css
import style from "../../styles/kelolaAkun.module.css";

export default function TambahMobil() {
  const router = useRouter();

  return (
    <>
    <Head>
       <title>Tambah Mobil</title>
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

        <h6 className="ms-3 mt-5">Tambah Mobil Di Showroom</h6>
        <div className="d-flex flex-column mx-5 mt-5">
          <div className="row mb-3">
            <label htmlFor="namaMobil" className="col-sm-2 col-form-label">Nama Mobil</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="namaMobil" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="tipe" className="col-sm-2 col-form-label">Tipe</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="tipe" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="tahun" className="col-sm-2 col-form-label">Tahun</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="tahun" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="transmisi" className="col-sm-2 col-form-label">Tipe Transmisi</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="transmisi" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="harga" className="col-sm-2 col-form-label">Harga</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="harga" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="cc" className="col-sm-2 col-form-label">CC</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="cc" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="km" className="col-sm-2 col-form-label">KM</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="km" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="deskripsi" className="col-sm-2 col-form-label">Deskripsi</label>
            <div className="col-sm-10">
              <textarea className="form-control" id="deskripsi" rows="4"></textarea>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="gambar" className="col-sm-2 col-form-label">Foto</label>
            <div className="col-sm-10">
              <input type="file" className="form-control" id="gambar" multiple/>
            </div>
          </div>
          <div className="d-grid gap-2 d-md-block text-end">
            <button className="btn btn-primary" type="button">
              Tambah
            </button>
          </div>
        </div>
      </div>
    </NavbarAndSidebar> 
    </>
  )
}