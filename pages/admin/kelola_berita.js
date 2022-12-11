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

  const detailBerita = (kategori, judul) => {
    router.push(`/admin/detail_berita?kategori=${kategori}&judul=${judul}`);
  }

  const editBerita = (kategori, judul) => {
    router.push(`/admin/edit_berita?kategori=${kategori}&judul=${judul}`);
  }

  return (
    <>
  	<Head>
       <title>Kelola Berita</title>
       <meta name="description" />
       <link rel="icon" href="/logo_bdl.png" />
    </Head>
    <NavbarAndSidebar>
      <div className={`${style.kotakUtama} mt-4`}>
        <div className={`${style.kotakAtas}`}>
          <div className={`d-flex flex-row justify-content-between align-items-center p-3`}>
            <h6>Kelola Berita</h6>
            <button type="button" className="btn btn-success" onClick={()=>{router.push("/admin/buat_berita")}}>
              Buat Berita
            </button>
          </div>
        </div>
        <div className={`${style.bgSerch} d-flex flex-row justify-content-evenly align-items-center my-4 py-3`}>
            <div className="col-6">
              <input type="text" className="form-control form-control-lg" id="serch" />
            </div>
            <div className="col-3">
              <select className="form-select form-select-lg">
                <option>Pilih Kategori</option>
                <option value="NEWS" >News</option>
                <option value="PEDIA">Pedia</option>
                <option value="TIPS">Tips</option>
              </select>
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-primary btn-lg">Cari Berita</button>
            </div>
        </div>

        <h6 className="ms-3">Daftar Berita Website BDL Mobilindo</h6>
        <div className="d-flex table-responsive">
        <table className="table table-bordered mx-4">
          <thead className={`${style.headTableColor}`}>
            <tr className="text-white">
              <th scope="col">No</th>
              <th scope="col">KATEGORI BERITA</th>
              <th scope="col">JUDUL BERITA</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>NEWS</td>
              <td>Buntut Kasus Penipuan Diler Resmi Honda MT Haryono</td>
              <td>
                <div className="d-flex text-center">
                  <button className="btn btn-primary" type="button" 
                    onClick={()=>{detailBerita("NEWS" ,"Buntut Kasus Penipuan Diler Resmi Honda MT Haryono")}}
                  >
                    <img src="/icons/eye.svg" />
                  </button>
                  <button className="btn btn-success mx-2" type="button"
                    onClick={()=>{editBerita("NEWS" ,"Buntut Kasus Penipuan Diler Resmi Honda MT Haryono")}}
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
              <td>PEDIA</td>
              <td>Bikin Audio Lebih Bagus, Pasang Peredam Kabin Mobil Tetap Plus Minus</td>
              <td>
                <div className="d-flex text-center">
                  <button className="btn btn-primary" type="button" 
                    onClick={()=>{detailBerita("PEDIA" ,"Bikin Audio Lebih Bagus, Pasang Peredam Kabin Mobil Tetap Plus Minus")}}
                  >
                    <img src="/icons/eye.svg" />
                  </button>
                  <button className="btn btn-success mx-2" type="button"
                    onClick={()=>{editBerita("PEDIA" ,"Bikin Audio Lebih Bagus, Pasang Peredam Kabin Mobil Tetap Plus Minus")}}
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
              <td>TIPS</td>
              <td>Mobil Klasik Harga Miliaran Rupiah Laris di IIMS Hybrid 2022</td>
              <td>
                <div className="d-flex text-center">
                  <button className="btn btn-primary" type="button" 
                    onClick={()=>{detailBerita("TIPS" ,"Mobil Klasik Harga Miliaran Rupiah Laris di IIMS Hybrid 2022")}}
                  >
                    <img src="/icons/eye.svg" />
                  </button>
                  <button className="btn btn-success mx-2" type="button"
                    onClick={()=>{editBerita("TIPS" ,"Mobil Klasik Harga Miliaran Rupiah Laris di IIMS Hybrid 2022")}}
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