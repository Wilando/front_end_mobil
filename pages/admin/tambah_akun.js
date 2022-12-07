import { useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Component
import NavbarAndSidebar from "../../components/admin/NavbarAndSidebar.js";
// Css
import style from "../../styles/kelolaAkun.module.css";

export default function TambahAkun() {
  const router = useRouter();

  return (
    <>
    <Head>
       <title>Tambah Akun</title>
       <meta name="description" />
       <link rel="icon" href="/logo_bdl.png" />
    </Head>
    <NavbarAndSidebar>
      <div className={`${style.kotakUtama} mt-4 pb-4 mb-4`}>
        <div className={`${style.kotakAtas}`}>
          <div className={`d-flex flex-row justify-content-between align-items-center p-3`}>
            <h6>Kelola Akun</h6>

          </div>
        </div>
        <div className={`${style.bgSerch} d-flex flex-row justify-content-evenly align-items-center my-4 py-3`}>
            <div className="col-6">
              <input type="text" className="form-control form-control-lg" id="serch" />
            </div>
            <div className="col-3">
              <select className="form-select form-select-lg">
                <option>Pilih Role</option>
                <option value="1">Admin</option>
                <option value="2">Super Admin</option>
                <option value="3">Inspector</option>
              </select>
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-primary btn-lg">Cari Akun</button>
            </div>
        </div>

        <h6 className="ms-3">Tambah Akun Pengelola</h6>
        <div className="d-flex flex-column mx-5 mt-5">
          <div className="row mb-3">
            <label htmlFor="role" className="col-sm-2 col-form-label">Kategori Akun</label>
            <div className="col-sm-10">
              <select className="form-select">
                <option>Pilih Role</option>
                <option value="1">Admin</option>
                <option value="2">Super Admin</option>
                <option value="3">Inspector</option>
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="namaLengkap" className="col-sm-2 col-form-label">Nama Lengkap</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="namaLengkap" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="username" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="email" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="password" className="col-sm-2 col-form-label">Kata Sandi</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="password" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="password" className="col-sm-2 col-form-label">Foto</label>
            <div className="col-sm-10">
              <input type="file" className="form-control" id="password" />
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