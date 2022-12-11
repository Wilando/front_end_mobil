import { useState, useEffect } from "react";
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {filter} from "smart-array-filter";

// Component
import Navbar from "../components/customer/Navbar";
import Footer from "../components/customer/Footer";
//CSS
import style from "../styles/daftar_mobil.module.css";
//Data
import {listMobil} from '../mobil';

export default function DaftarMobil() {
	const router = useRouter();
	const { cari } = router.query
  const [cariMobil, setCariMobil] = useState(cari);
  const [mobil, setMobil] = useState([]);

	const detail = (hasil) =>{
	  if(hasil === undefined){
	  	router.push(`/detail_mobil?cari=TOYOTA 2019`)	
	  }
	  else{
	  	router.push(`/detail_mobil?cari=${hasil}`)	
	  }	  
	}

  const pencarian = ()=>{
    const filteredData = filter(listMobil, {
      keywords: cariMobil,
      caseSensitive: false,
    });
    setMobil(filteredData)
  }

  useEffect(() => {
    const filteredData = filter(listMobil, {
      keywords: cari,
      caseSensitive: false,
    });
    setMobil(filteredData)
  }, []);

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
              <button type="button" className="btn btn-primary btn-lg px-4 mx-4" onClick={pencarian}>
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
	    {mobil.length === 0 ? <h3 className="text-center">Pencarian tidak Ditemukan</h3> 
	    :
	    <div className="row row-cols-1 row-cols-md-3 g-4">
        {
          mobil.map((mob, index)=>
            <div className="col" key={index}>
              <div className="card h-100">
                <img src={`Mobil/${mob.namaMobil}-1.jpg`} className="card-img-top" alt="Mobil"/>
                <div className="card-body">
                  <h5 className="card-title">{mob.namaMobil}</h5>
                  <p className="card-text">2018 | MANUAL TRANSMISSION | 1300 CC | KM 130.00</p>
                  <p><strong>Rp. 132.000.000</strong></p>
                  <button type="button" className="btn btn-outline-primary" onClick={()=>{detail(mob.namaMobil)}}>
                  Selengkapnya
                </button>
                </div>
              </div>
            </div> 
          )
        }   
      </div>
	    }
	    </div>

	    <Footer/>
  	  </>
  	)
}