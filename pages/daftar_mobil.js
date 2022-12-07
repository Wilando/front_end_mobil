import { useState } from "react";
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Component
import Navbar from "../components/customer/Navbar";
import Footer from "../components/customer/Footer";
//CSS
import style from "../styles/daftar_mobil.module.css";

export default function DaftarMobil() {
	const router = useRouter();
	const { cari } = router.query
  	const [cariMobil, setCariMobil] = useState(cari);

  	const detail = (mobil) =>{
  	  if(mobil === undefined){
  	  	router.push(`/detail_mobil?cari=TOYOTA 2019`)	
  	  }
  	  else{
  	  	router.push(`/detail_mobil?cari=${mobil}`)	
  	  }
	  
	}

  	return (
  	  <>
  		<Head>
	       <title>Daftar Mobil</title>
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
               value={cariMobil}
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

	    <h2 className="text-center my-5">DAFTAR MOBIL</h2>
	    <div className="container mb-5">
	    {cari === "" ? <h3 className="text-center">Pencarian tidak Ditemukan</h3> 
	    : 
	    <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src="images/mobil.png" className="card-img-top" alt="Mobil"/>
            <div className="card-body">
              <h5 className="card-title">{cari != undefined ? cari : "TOYOTA 2019"}</h5>
              <p className="card-text">2018 | MANUAL TRANSMISSION | 1300 CC | KM 130.00</p>
              <p><strong>Rp. 132.000.000</strong></p>
              <button type="button" className="btn btn-outline-primary" onClick={()=>{detail(cari)}}>
              Selengkapnya
            </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="images/mobil.png" className="card-img-top" alt="Mobil"/>
            <div className="card-body">
              <h5 className="card-title">{cari != undefined ? cari : "TOYOTA 2019"}</h5>
              <p className="card-text">2018 | MANUAL TRANSMISSION | 1300 CC | KM 130.00</p>
              <p><strong>Rp. 132.000.000</strong></p>
              <button type="button" className="btn btn-outline-primary" onClick={()=>{detail(cari)}}>
              Selengkapnya
            </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="images/mobil.png" className="card-img-top" alt="Mobil"/>
            <div className="card-body">
              <h5 className="card-title">{cari != undefined ? cari : "TOYOTA 2019"}</h5>
              <p className="card-text">2018 | MANUAL TRANSMISSION | 1300 CC | KM 130.00</p>
              <p><strong>Rp. 132.000.000</strong></p>
              <button type="button" className="btn btn-outline-primary" onClick={()=>{detail(cari)}}>
              Selengkapnya
            </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="images/mobil.png" className="card-img-top" alt="Mobil"/>
            <div className="card-body">
              <h5 className="card-title">{cari != undefined ? cari : "TOYOTA 2019"}</h5>
              <p className="card-text">2018 | MANUAL TRANSMISSION | 1300 CC | KM 130.00</p>
              <p><strong>Rp. 132.000.000</strong></p>
              <button type="button" className="btn btn-outline-primary" onClick={()=>{detail(cari)}}>
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