import { useState } from "react";
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
// Component
import Navbar from "../components/customer/Navbar";
import Footer from "../components/customer/Footer";
//CSS
import style from "../styles/berita.module.css";

export default function DetailBerita() {
	const router = useRouter();

  return (
    <>
  	<Head>
       <title>Transaksi</title>
       <meta name="description" />
       <link rel="icon" href="/logo_bdl.png" />
    </Head>
    <Navbar />

    <div className={`container-fluid ${style.bg} py-5`}>
      <h4 className="text-center">TRANSAKSI BDL MOBILINDO</h4>
    </div>

    <div className="container">
      <h4 className="mt-5">TRANSAKSI</h4>
      <p>
        Jual mobil anda pada kami, tanpa perantara, bisa dengan 
        cash dan kredit. Tukar Tambah di BDL Mobilindo bisa upgrade 
        mobil atau pengembalian uang untuk modal. Kami juga bisa mencarikan mobil 
        yang anda inginkan, cukup dengan isikan detailnya dibagian form.
      </p>
      <div className="row">
        <div className="col-5">  
          <form>
            <div className="mb-3">
              <label htmlFor="nhtmlFma" className="form-label">Nama Lengkap</label>
              <input type="text" className="form-control" id="nama"/>
            </div>
            <div className="mb-3">
              <label htmlFor="nama" className="form-label">No WhatsApp</label>
              <input type="text" className="form-control" id="nama"/>
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="transaksi">Jenis Transaksi</label>
              <select className="form-select" id="transaksi">
                <option>Pilih</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="detail" className="form-label">Detail Lengkap</label>
              <textarea className="form-control" id="detail" rows="4"></textarea>
              <div className="form-text">Isikan detail mobil yang Anda ingin jual/tukar tambah/pesan.</div>
            </div>
            <div className="d-grid col-12 mx-auto">
              <button className="btn btn-primary" type="button">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <h4 className="mt-5">SALON MOBIL</h4>
      <p>
        Salon mobil BDL Mobilindo, kami melayani penyalonan mobil kecil dan besar. 
        Ada 5 Fasilitas yang kami berikan, diantaranya : Poles Full Body, Pembersihan Semua Kursi, 
        Pembersihan Interior, Pembersihan Kolong Ban, Mesin disemprot obat jamur, dll.
      </p>
      <div className="row">
        <div className="col-5">  
          <form>
            <div className="mb-3">
              <label htmlFor="nama" className="form-label">Nama Lengkap</label>
              <input type="text" className="form-control" id="nama"/>
            </div>
            <div className="mb-3">
              <label htmlFor="nama" className="form-label">No WhatsApp</label>
              <input type="text" className="form-control" id="nama"/>
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="ukuran_mobil">Ukuran Mobil</label>
              <select className="form-select" id="ukuran_mobil">
                <option>Pilih</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="hari">Hari</label>
              <select className="form-select" id="hari">
                <option>Pilih</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div className="form-text">Hari yang anfa pilih sebagai referensi penjadwalan sesuai antrian.</div>
            </div>
            <div className="d-grid col-12 mx-auto">
              <button className="btn btn-primary" type="button">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <h4 className="mt-5">JASA INSPEKSI MOBIL</h4>
      <p>
        Laporan yang diberikan adalah berdasarkan hasil pengecekan di waktu yang telah ditentukan, 
        segala hal yang terjadi setelah pengecekan adalah di luar tanggung jawab pihak BDL Mobilindo. 
        Pengecekan mobil oleh mekanik berpengalaman.
      </p>
      <div className="row mb-5">
        <div className="col-5">  
          <form>
            <div className="mb-3">
              <label htmlFor="nama" className="form-label">Nama Lengkap</label>
              <input type="text" className="form-control" id="nama"/>
            </div>
            <div className="mb-3">
              <label htmlFor="nama" className="form-label">No WhatsApp</label>
              <input type="text" className="form-control" id="nama"/>
            </div>
            <div className="mb-3">
              <label htmlFor="nama" className="form-label">Nama Pemilik Mobil</label>
              <input type="text" className="form-control" id="nama"/>
            </div>
            <div className="mb-3">
              <label htmlFor="nama" className="form-label">Nama Mobil</label>
              <input type="text" className="form-control" id="nama"/>
              <div className="form-text">Avanza, Jazz, Brio, dll.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="nama" className="form-label">Alamat Pemilik Mobil</label>
              <input type="text" className="form-control" id="nama"/>
            </div>
            <div className="d-grid col-12 mx-auto">
              <button className="btn btn-primary" type="button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  )
}