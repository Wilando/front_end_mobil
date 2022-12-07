import { useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Component
import NavbarAndSidebar from "../../components/admin/NavbarAndSidebar.js";
// Css
import style from "../../styles/kelolaAkun.module.css";

export default function KelolaStockMobil() {
	const router = useRouter();

  const detail = (mobil, harga) => {
    router.push(`/admin/detail_stock_mobil?mobil=${mobil}&harga=${harga}`);
  }

  const detailMobil = (mobil, harga) => {
    router.push(`/admin/detail_mobil?mobil=${mobil}&harga=${harga}`);
  }

  const editMobil = (mobil, harga) => {
    router.push(`/admin/edit_mobil?mobil=${mobil}&harga=${harga}`);
  }

  return (
    <>
  	<Head>
       <title>Kelola Stock Mobil</title>
       <meta name="description" />
       <link rel="icon" href="/logo_bdl.png" />
    </Head>
    <NavbarAndSidebar>
      <div className={`${style.kotakUtama} mt-4`}>
        <div className={`${style.kotakAtas}`}>
          <div className={`d-flex flex-row justify-content-between align-items-center p-3`}>
            <h6>Kelola Stock Mobil</h6>
            <button type="button" className="btn btn-success" onClick={()=>{router.push("/admin/tambah_mobil")}}>
              Tambah Mobil
            </button>
          </div>
        </div>
        <div className={`${style.bgSerch} d-flex flex-row justify-content-evenly align-items-center my-4 py-3`}>
            <div className="col-6">
              <input type="text" className="form-control form-control-lg" id="serch" />
            </div>
            <div className="col-3">
              <select className="form-select form-select-lg">
                <option></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-primary btn-lg">Cari Mobil</button>
            </div>
        </div>

        <h6 className="ms-3">Daftar Stok Mobil Showroom</h6>
        <div className="d-flex">
        <table className="table table-bordered mx-4">
          <thead className={`${style.headTableColor}`}>
            <tr className="text-white">
              <th scope="col">No</th>
              <th scope="col">Nama Mobil</th>
              <th scope="col">Harga</th>
              <th scope="col">Deskripsi</th>
              <th scope="col">Status</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Avanza</td>
              <td>Rp.121.000.000</td>
              <td>Pajak On, Mesin Record Dealer, mesin Terawat Halus Seperti Baru, Body Kinclong Tnpa Dempul, Interior Nyaman, Siap Pakai.</td>
              <td>Tersedia</td>
              <td>
                <div className="d-flex text-center">
                  <button className="btn btn-primary" type="button" 
                    onClick={()=>{detailMobil("Avanza" ,"Rp.121.000.000")}}
                  >
                    <img src="/icons/eye.svg" />
                  </button>
                  <button type="button" className="btn btn-secondary ms-2"
                    onClick={()=>{detail("Avanza" ,"Rp.121.000.000")}}
                  >
                    <img src="/icons/detail_transaksi.svg" />
                  </button>
                  <button className="btn btn-success mx-2" type="button"
                    onClick={()=>{editMobil("Avanza" ,"Rp.121.000.000")}}
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
              <td>Innova Ribbon</td>
              <td>Rp.256.000.000</td>
              <td>Pajak On, Mesin Record Dealer, mesin Terawat Halus Seperti Baru, Body Kinclong Tnpa Dempul, Interior Nyaman, Siap Pakai.</td>
              <td>Terjual</td>
              <td>
                <div className="d-flex text-center">
                  <button className="btn btn-primary" type="button" 
                    onClick={()=>{detailMobil("Innova Ribbon" ,"Rp.256.000.000")}}
                  >
                    <img src="/icons/eye.svg" />
                  </button>
                  <button type="button" className="btn btn-secondary ms-2"
                    onClick={()=>{detail("Innova Ribbon" ,"Rp.256.000.000")}}
                  >
                    <img src="/icons/detail_transaksi.svg" />
                  </button>
                  <button className="btn btn-success mx-2" type="button"
                    onClick={()=>{editMobil("Innova Ribbon" ,"Rp.256.000.000")}}
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
              <td>All New Rush 2019</td>
              <td>Rp.232.000.000</td>
              <td>Pajak On, Mesin Record Dealer, mesin Terawat Halus Seperti Baru, Body Kinclong Tnpa Dempul, Interior Nyaman, Siap Pakai.</td>
              <td>Terbooking</td>
              <td>
                <div className="d-flex text-center">
                  <button className="btn btn-primary" type="button" 
                    onClick={()=>{detailMobil("All New Rush 2019" ,"Rp.232.000.000")}}
                  >
                    <img src="/icons/eye.svg" />
                  </button>
                  <button type="button" className="btn btn-secondary ms-2"
                    onClick={()=>{detail("All New Rush 2019" ,"Rp.232.000.000")}}
                  >
                    <img src="/icons/detail_transaksi.svg" />
                  </button>
                  <button className="btn btn-success mx-2" type="button"
                    onClick={()=>{editMobil("All New Rush 2019" ,"Rp.232.000.000")}}
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