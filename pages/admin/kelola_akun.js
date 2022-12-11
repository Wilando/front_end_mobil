import { useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Component
import NavbarAndSidebar from "../../components/admin/NavbarAndSidebar.js";
// Css
import style from "../../styles/kelolaAkun.module.css";

export default function KelolaAkun() {
	const router = useRouter();

  const detail = (nama, username, email) => {
    router.push(`/admin/detail_akun?namaLengkap=${nama}&username=${username}&email=${email}`);
  }

  const editAkun = (nama, username, email) => {
    router.push(`/admin/edit_akun?namaLengkap=${nama}&username=${username}&email=${email}`);
  }

  return (
    <>
  	<Head>
       <title>Kelola Akun</title>
       <meta name="description" />
       <link rel="icon" href="/logo_bdl.png" />
    </Head>
    <NavbarAndSidebar>
      <div className={`${style.kotakUtama} mt-4`}>
        <div className={`${style.kotakAtas}`}>
          <div className={`d-flex flex-row justify-content-between align-items-center p-3`}>
            <h6>Kelola Akun</h6>
            <button type="button" className="btn btn-success" onClick={()=>{router.push("/admin/tambah_akun")}}>
              Tambah Akun
            </button>
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

        <h6 className="ms-3">Daftar Akun Pengelola Website BDL Mobilindo</h6>
        <div className="d-flex table-responsive">
        <table className="table table-bordered mx-4">
          <thead className={`${style.headTableColor}`}>
            <tr className="text-white">
              <th scope="col">No</th>
              <th scope="col">Nama Akun</th>
              <th scope="col">Email</th>
              <th scope="col">Roles</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Muhammad Juned Bac</td>
              <td>juned.superadmin@gmail.com</td>
              <td><span className={style.rolesTable}>Super Administrator</span></td>
              <td>
                <div className="d-grid gap-2 d-md-block text-center">
                  <button className="btn btn-primary" type="button" 
                    onClick={()=>{detail("Muhammad Juned Bac","Juned" ,"juned.superadmin@gmail.com")}}
                  >
                    <img src="/icons/eye.svg" />
                  </button>
                  <button className="btn btn-success mx-3" type="button"
                    onClick={()=>{editAkun("Muhammad Juned Bac","Juned" ,"juned.superadmin@gmail.com")}}
                  >
                    <img src="/icons/pena.svg" />
                  </button>
                  <button className="btn btn-danger" type="button">
                    <img src="/icons/trash.svg" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Deko Maftha</td>
              <td>deko.admin@gmail.com</td>
              <td><span className={style.rolesTable}>Admin</span></td>
              <td>
                <div className="d-grid gap-2 d-md-block text-center">
                  <button className="btn btn-primary" type="button" 
                    onClick={()=>{detail("Deko Maftha","Deko" ,"deko.admin@gmail.com")}}
                  >
                    <img src="/icons/eye.svg" />
                  </button>
                  <button className="btn btn-success mx-3" type="button" 
                    onClick={()=>{editAkun("Deko Maftha","Deko" ,"deko.admin@gmail.com")}}
                  >
                    <img src="/icons/pena.svg" />
                  </button>
                  <button className="btn btn-danger" type="button">
                    <img src="/icons/trash.svg" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Zhaafira Zahra</td>
              <td>zhaf.inspektor@gmail.com</td>
              <td><span className={style.rolesTable}>Inspektor</span></td>
              <td>
                <div className="d-grid gap-2 d-md-block text-center">
                  <button className="btn btn-primary" type="button" 
                    onClick={()=>{detail("Zhaafira Zahra","Zhaafira" ,"zhaf.inspektor@gmail.com")}}
                  >
                    <img src="/icons/eye.svg" />
                  </button>
                  <button className="btn btn-success mx-3" type="button"
                    onClick={()=>{editAkun("Zhaafira Zahra","Zhaafira" ,"zhaf.inspektor@gmail.com")}}
                  >
                    <img src="/icons/pena.svg" />
                  </button>
                  <button className="btn btn-danger" type="button">
                    <img src="/icons/trash.svg" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </NavbarAndSidebar> 
    </>
  )
}