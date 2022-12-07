import { useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Component
import NavbarAndSidebar from "../../components/admin/NavbarAndSidebar.js";
// Css
import style from "../../styles/kelolaAkun.module.css";

export default function TambahBerita() {
  const router = useRouter();

  return (
    <>
    <Head>
       <title>Buat Berita</title>
       <meta name="description" />
       <link rel="icon" href="/logo_bdl.png" />
    </Head>
    <NavbarAndSidebar>
      <div className={`${style.kotakUtama} mt-4 pb-4 mb-4`}>
        <div className={`${style.kotakAtas}`}>
          <div className={`d-flex flex-row justify-content-between align-items-center p-3`}>
            <h6>Kelola Berita</h6>

          </div>
        </div>

        <h6 className="ms-3 mt-5">Tambah Berita Website BDL Mobilindo</h6>
        <div className="d-flex flex-column mx-5 mt-5">
          <div className="row mb-3">
            <label htmlFor="kategori" className="col-sm-2 col-form-label">Nama Kategori</label>
            <div className="col-sm-10">
              <select className="form-select">
                <option>Pilih Kategori</option>
                <option value="NEWS">News</option>
                <option value="PEDIA">Pedia</option>
                <option value="TIPS">Tips</option>
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="gambar" className="col-sm-2 col-form-label">Foto Berita</label>
            <div className="col-sm-10">
              <input type="file" className="form-control" id="gambar" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="judul" className="col-sm-2 col-form-label">Judul Berita</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="judul" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="pembuka" className="col-sm-2 col-form-label">Teks Pembuka</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="pembuka" />
            </div>
          </div>
          <div class="row mb-3">
            <label htmlFor="konten" class="col-sm-2 col-form-label">Konten Berita</label>
            <div className="col-sm-10">
              <textarea class="form-control" id="konten" rows="10"></textarea>
            </div>
          </div>
          <div className="d-grid gap-2 d-md-block text-end">
            <button className="btn btn-primary" type="button">
              Buat
            </button>
          </div>
        </div>
      </div>
    </NavbarAndSidebar> 
    </>
  )
}