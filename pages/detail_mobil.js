import { useState } from "react";
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Component
import Navbar from "../components/customer/Navbar";
import Footer from "../components/customer/Footer";
//CSS
import style from "../styles/daftar_mobil.module.css";

export default function DetailMobil() {
	const router = useRouter();
	const { cari } = router.query
  const [cariMobil, setCariMobil] = useState("");
  const detail = (mobil) =>{
    router.push(`/detail_mobil?cari=${mobil}`)
  }

	return (
	  <>
		<Head>
       <title>Detail Mobil</title>
       <meta name="description" />
       <link rel="icon" href="/logo_bdl.png" />
    </Head>
    <Navbar />

    <div className={`${style.bg} container-fluid py-5`}>
      <div className="container">
    	<div className="d-flex justify-content-between">
        <input className="form-control form-control-lg" type="text"
         placeholder="Cari mobil berdasarkan Merek, Tahun, Plat."
         onChange={(event)=>{setCariMobil(event.target.value)}}
        />
        <button type="button" className="btn btn-primary btn-lg px-4 mx-4" onClick={()=>{router.push(`/daftar_mobil?cari=${cariMobil}`)}}>
        	Cari
        </button>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-4">
		  <button className="btn btn-light me-md-2 px-md-4" type="button">Merk</button>
		  <button className="btn btn-light me-md-2 px-md-4" type="button">Tipe</button>
		  <button className="btn btn-light me-md-2 px-md-4" type="button">Warna</button>
		  <button className="btn btn-light me-md-2 px-md-4" type="button">Tahun</button>
		  <button className="btn btn-light me-md-2 px-md-4" type="button">Transmisi</button>
		  <button className="btn btn-light" type="button">Bersertifikat</button>
		</div>
      </div>
    </div>

    <div className="container">
      <div className="d-flex flex-column flex-md-row mb-3 mt-5">
        <img className="img-fluid" src={`/Mobil/${cari}-1.jpg`} alt="merk" />
        <div className="ms-md-5">
          <h1>{cari}</h1>
          <h4>Rp. 132.000.000</h4>
          <div className="d-flex flex-row mb-5">
            <a className="h5 text-muted" href="#">Tunai</a> 
            <span className="mx-2">|</span> 
            <a className="h5 text-muted" href="#">Kredit</a> 
            <span className="mx-2">|</span> 
            <a className="h5 text-muted" href="#">Tukar Tambah</a> 
          </div>
          <div className="card text-bg-light text-center mb-3">
            <div className="card-header">Deskripsi</div>
            <div className="card-body">
              <p className="card-text">
                Pajak On, Mesin Record Dealer, mesin Terawat Halus Seperti Baru, Body Kinclong Tnpa Dempul, Interior Nyaman, Siap Pakai.
              </p>
            </div>
          </div>
          <div className="d-grid">
            <button className="btn btn-outline-success" type="button">
              <img src="/icons/waHijau.svg" /> 
              Kontak Admin
            </button>
          </div>
        </div>
        
      </div>
    </div>

    <h2 className="text-center my-5">TEMUKAN MOBIL LAIN</h2>
    <div className="container mb-5">
    {cari === "" ? <h3 className="text-center">Pencarian tidak Ditemukan</h3> 
    : 
    <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src="Mobil/trailblazer-1.jpg" className="card-img-top" alt="Mobil"/>
            <div className="card-body">
              <h5 className="card-title">Trailblazer</h5>
              <p className="card-text">2018 | MANUAL TRANSMISSION | 1300 CC | KM 130.00</p>
              <p><strong>Rp. 132.000.000</strong></p>
              <button type="button" className="btn btn-outline-primary" onClick={()=>{detail("trailblazer")}}>
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="Mobil/terios-1.jpg" className="card-img-top" alt="Mobil"/>
            <div className="card-body">
              <h5 className="card-title">Terios</h5>
              <p className="card-text">2018 | MANUAL TRANSMISSION | 1300 CC | KM 130.00</p>
              <p><strong>Rp. 132.000.000</strong></p>
              <button type="button" className="btn btn-outline-primary" onClick={()=>{detail("terios")}}>
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="Mobil/serena-1.jpg" className="card-img-top" alt="Mobil"/>
            <div className="card-body">
              <h5 className="card-title">Serena</h5>
              <p className="card-text">2018 | MANUAL TRANSMISSION | 1300 CC | KM 130.00</p>
              <p><strong>Rp. 132.000.000</strong></p>
              <button type="button" className="btn btn-outline-primary" onClick={()=>{detail("serena")}}>
                Selengkapnya
              </button>
            </div>
          </div>
        </div>   
      </div>
    }
    </div>

    <Footer/>
  	  </>
  	)
}