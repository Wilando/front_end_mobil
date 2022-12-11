import { useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Component
import NavbarAndSidebar from "../../components/admin/NavbarAndSidebar.js";
// Css
import style from "../../styles/kelolaAkun.module.css";

export default function KelolaPromo() {
	const router = useRouter();

  const detail = (namaPromo, periode) => {
    router.push(`/admin/detail_promo?namaPromo=${namaPromo}&periode=${periode}`);
  }

  const edit = (namaPromo, periode) => {
    router.push(`/admin/edit_promo?namaPromo=${namaPromo}&periode=${periode}`);
  }

  return (
    <>
  	<Head>
       <title>Kelola Promo</title>
       <meta name="description" />
       <link rel="icon" href="/logo_bdl.png" />
    </Head>
    <NavbarAndSidebar>
      <div className={`${style.kotakUtama} mt-4`}>
        <div className={`${style.kotakAtas}`}>
          <div className={`d-flex flex-row justify-content-between align-items-center p-3`}>
            <h6>Kelola Promo</h6>
            <button type="button" className="btn btn-success" onClick={()=>{router.push("/admin/buat_promo")}}>
              Buat Promo
            </button>
          </div>
        </div>
        <div className={`${style.bgSerch} d-flex flex-row justify-content-evenly align-items-center my-4 py-3`}>
            <div className="col-9">
              <input type="text" className="form-control form-control-lg" id="serch" />
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-primary btn-lg">Cari Promo</button>
            </div>
        </div>

        <h6 className="ms-3">Daftar Promo Website BDL Mobilindo</h6>
        <div className="d-flex table-responsive">
        <table className="table table-bordered mx-4">
          <thead className={`${style.headTableColor}`}>
            <tr className="text-white">
              <th scope="col">No</th>
              <th scope="col">NAMA PROMO</th>
              <th scope="col">PERIODE</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>CUANKI</td>
              <td>01 Maret 2022 - 31 Maret 2022</td>
              <td>
                <div className="d-flex text-center">
                  <button className="btn btn-primary" type="button" 
                    onClick={()=>{detail("CUANKI" ,"01 Maret 2022 - 31 Maret 2022")}}
                  >
                    <img src="/icons/eye.svg" />
                  </button>
                  <button className="btn btn-success mx-2" type="button"
                    onClick={()=>{edit("CUANKI" ,"01 Maret 2022 - 31 Maret 2022")}}
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
              <td>CASHBACK RAMADHAN</td>
              <td>04 April 2022 - 12 April 2022</td>
              <td>
                <div className="d-flex text-center">
                  <button className="btn btn-primary" type="button" 
                    onClick={()=>{detail("CASHBACK RAMADHAN" ,"04 April 2022 - 12 April 2022")}}
                  >
                    <img src="/icons/eye.svg" />
                  </button>
                  <button className="btn btn-success mx-2" type="button"
                    onClick={()=>{edit("CASHBACK RAMADHAN" ,"04 April 2022 - 12 April 2022")}}
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
              <td>CUAN HOKI</td>
              <td>1 Mei 2022 - 10 Mei 2022</td>
              <td>
                <div className="d-flex text-center">
                  <button className="btn btn-primary" type="button" 
                    onClick={()=>{detail("CUAN HOKI" ,"1 Mei 2022 - 10 Mei 2022")}}
                  >
                    <img src="/icons/eye.svg" />
                  </button>
                  <button className="btn btn-success mx-2" type="button"
                    onClick={()=>{edit("CUAN HOKI" ,"1 Mei 2022 - 10 Mei 2022")}}
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