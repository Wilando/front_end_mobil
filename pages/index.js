import { useState } from "react";
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Component
import Navbar from "../components/customer/Navbar";
import Footer from "../components/customer/Footer";
//CSS
import style from "../styles/beranda.module.css";

// Image
import bg from '../public/images/bg_home.png';

export default function Home() {
  
  const router = useRouter();
  const [cari, setCari] = useState("");
  const [caraBeli, setCaraBeli] = useState(true);
  const [caraJual, setCaraJual] = useState(false);

  const toggleCaraBeli = () => {
    if(!caraBeli){
      setCaraBeli(!caraBeli);
      setCaraJual(!caraJual);
    }
  };
  const toggleCaraJual = () => {
    if(!caraJual){
      setCaraBeli(!caraBeli);
      setCaraJual(!caraJual);
    }
  };

  const merk = (merkMobil) =>{
    router.push(`/daftar_mobil?cari=${merkMobil}`)
  }

  const detail = (mobil) =>{
    router.push(`/detail_mobil?cari=${mobil}`)
  }

  return (
    <>
      <Head>
        <title>Beranda</title>
        <meta name="description" />
        <link rel="icon" href="/logo_bdl.png" />
      </Head>

      <Navbar />
      <img src="/images/bg_home.png" className={`img-fluid d-none d-md-block ${style.heroes}`} alt="gambar"/>
      <div className="container mb-5">
        <div className={`${style.formJualBeli} row p-3 g-4`}>
          <div className="col-12 col-md-8">
            <h3>Beli Mobil</h3>
            <div className="d-flex justify-content-between mt-4">
              <input className="form-control form-control-lg" type="text"
               placeholder="Cari mobil berdasarkan Merek, Tahun, Plat."
               onChange={(event)=>{setCari(event.target.value)}}
              />
              <button type="button" className={`${style.btnBeranda} btn btn-lg px-4 mx-4`} onClick={()=>{router.push(`/daftar_mobil?cari=${cari}`)}}>
                Cari
              </button>
            </div>
            <div className="row overflow-auto text-center mt-4 gy-3">
              <div className="col" onClick={()=>{merk("Honda")}}>
                <div className={`${style.merek} p-4 border`}>
                  <Image src="/images/honda.png" alt="merk" width={88} height={65}/>
                  <h6 className="mt-3">Honda</h6>
                </div>
              </div>
              <div className="col" onClick={()=>{merk("Toyota")}}>
                <div className={`${style.merek} p-4 border`}>
                  <Image src="/images/toyota.png" alt="merk" width={88} height={65}/>
                  <h6 className="mt-3">Toyota</h6>
                </div>
              </div>
              <div className="col" onClick={()=>{merk("Suzuki")}}>
                <div className={`${style.merek} p-4 border`}>
                  <Image src="/images/suzuki.png" alt="merk" width={88} height={65}/>
                  <h6 className="mt-3">Suzuki</h6>
                </div>
              </div>
              <div className="col" onClick={()=>{merk("Hyundai")}}>
                <div className={`${style.merek} p-4 border`}>
                  <Image src="/images/hyundai.png" alt="merk" width={88} height={65}/>
                  <h6 className="mt-3">Hyundai</h6>
                </div>
              </div>
              <div className="col" onClick={()=>{merk("Daihatsu")}}>
                <div className={`${style.merek} p-4 border`}>
                  <Image src="/images/daihatsu.png" alt="merk" width={88} height={65} />
                  <h6 className="mt-3">Daihatsu</h6>
                </div>
              </div>
              <div className="col" onClick={()=>{merk("Chevrolet")}}>
                <div className={`${style.merek} p-4 border`}>
                  <Image src="/images/chevrolet.png" alt="merk" width={88} height={65} />
                  <h6 className="mt-3">Chevrolet</h6>
                </div>
              </div>
              <div className="col" onClick={()=>{merk("Mitsubishi")}}>
                <div className={`${style.merek} p-4 border`}>
                  <Image src="/images/mitsubishi.png" alt="merk" width={88} height={65} />
                  <h6 className="mt-3">Mitsubishi</h6>
                </div>
              </div>
              <div className="col" onClick={()=>{merk("Nissan")}}>
                <div className={`${style.merek} p-4 border`}>
                  <Image src="/images/nissan.png" alt="merk" width={88} height={65} />
                  <h6 className="mt-3">Nissan</h6>
                </div>
              </div>

            </div>
          </div>
          <div className="col-12 col-md-4 border-start">
            <h3>Jual Mobil</h3>
            <select className="form-select my-4">
              <option defaultValue>Pilih Merk</option>
              <option value="Honda">Honda</option>
              <option value="Toyota">Toyota</option>
              <option value="Suzuki">Suzuki</option>
              <option value="Hyundai">Hyundai</option>
              <option value="Daihatsu">Daihatsu</option>
              <option value="Chevrolet">Chevrolet</option>
            </select>
            <select className="form-select my-4">
              <option defaultValue>Pilih Model</option>
              <option value="Mobilio">Mobilio</option>
              <option value="Jazz">Jazz</option>
              <option value="Brio">Brio</option>
              <option value="Civic">Civic</option>
            </select>
            <div className="mb-3">
              <label htmlFor="noTelp" className="form-label">Nomor Handphone/WhatsApp</label>
              <input type="number" className="form-control" id="noTelp"/>
            </div>
            <div className="d-grid">
              <button className={`${style.btnBeranda} btn`} type="button">Submit</button>
              <p>Kami akan segera menghubungi Anda melalui nomor handphone yang dimasukan.</p>
            </div>

          </div>
        </div>
      </div>

      <h3 className="text-center">TEMUKAN MOBIL SESUAI KEINGINAN ANDA!</h3>
      <h5 className="text-center">Dapatkan mobil sesuai kebutuhan dan gaya Anda. Berkendara bukan hanya sebuah perjalanan, namun kenyamanan dan keselamatan.</h5>

      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
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
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
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
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
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
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card text-bg-primary mb-3 h-100 ${style.lihatBanyakMobil}`}
              onClick ={()=>{router.push("/daftar_mobil")}}
            >
              <div className={`${style.lihatLebihBanyak} card-body d-flex align-items-center`}>
                <h5 className="card-text">Lihat lebih banyak mobil</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${style.caraKerja} container-fluid py-5`}>
        <h3 className={`${style.caraKerjaText} text-center`}>CARA KERJA</h3>
        
        <div className="d-grid gap-5 d-md-flex justify-content-center mt-4 mb-5">
          <button className={`${caraBeli ? style.btnCaraKerjaActive : style.btnCaraKerja} btn`} type="button" onClick={toggleCaraBeli} >CARA MEMBELI</button>
          <button className={`${caraBeli ? style.btnCaraKerja : style.btnCaraKerjaActive } btn`} type="button" onClick={toggleCaraJual} >CARA MENJUAL</button>
        </div>

        <div className="container">
          <div className={`${caraBeli ? null : "d-none"} row row-cols-1 row-cols-md-4 g-4`}>
            <div className="col">
              <div className="card h-100">

                <div className={`${style.caraKerjaIcon} p-4 rounded-circle d-flex justify-content-center m-3 ${style.circle}`}>
                  <img src="/icons/temukanMobil.svg" className={`card-img-top`} alt="gambar"/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Temukan Mobil Anda</h5>
                  <p className="card-text">
                    Lorem Ipsum has been the 
                    industry's standard dummy 
                    text ever since the 1500s
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className={`${style.caraKerjaIcon} p-4 rounded-circle d-flex justify-content-center m-3 ${style.circle}`}>
                 <img src="/icons/transaksi.svg" className={`card-img-top`} alt="gambar"/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Transaksi Pembayaran</h5>
                  <p className="card-text">
                    Lorem Ipsum has been the 
                    industry's standard dummy 
                    text ever since the 1500s
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className={`${style.caraKerjaIcon} p-4 rounded-circle d-flex justify-content-center m-3 ${style.circle}`}>
                  <img src="/icons/kirim.svg" className={`card-img-top`} alt="gambar"/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Pengiriman Langung Ke Rumah Anda</h5>
                  <p className="card-text">
                    Lorem Ipsum has been the 
                    industry's standard dummy 
                    text ever since the 1500s
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                {/*<div className={`${style.circleBackgorund}`}>*/}
                  <div className={`${style.caraKerjaIcon} p-4 rounded-circle d-flex justify-content-center m-3 ${style.circle}`}>
                   <img src="/icons/uangKembali.svg" className={`card-img-top`} alt="gambar"/>
                  </div>
                {/*</div>*/}
                <div className="card-body">
                  <h5 className="card-title">Jaminan Uang Kembali</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${caraBeli ? "d-none" : null } row row-cols-1 row-cols-md-4 g-4 justify-content-center`}>
            <div className="col">
              <div className="card h-100">

                <div className={`${style.caraKerjaIcon} p-4 rounded-circle d-flex justify-content-center m-3 ${style.circle}`}>
                  <img src="/icons/jadwal.svg" className={`card-img-top`} alt="gambar"/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Buat Jadwal</h5>
                  <p className="card-text">
                    Lorem Ipsum has been the 
                    industry's standard dummy 
                    text ever since the 1500s
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className={`${style.caraKerjaIcon} p-4 rounded-circle d-flex justify-content-center m-3 ${style.circle}`}>
                 <img src="/icons/inspeksi.svg" className={`card-img-top`} alt="gambar"/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Inspeksi Kendaraan Anda</h5>
                  <p className="card-text">
                    Lorem Ipsum has been the 
                    industry's standard dummy 
                    text ever since the 1500s
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className={`${style.caraKerjaIcon} p-4 rounded-circle d-flex justify-content-center m-3 ${style.circle}`}>
                  <img src="/icons/penjualan.svg" className={`card-img-top`} alt="gambar"/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Konfirmasi Penjualan</h5>
                  <p className="card-text">
                    Lorem Ipsum has been the 
                    industry's standard dummy 
                    text ever since the 1500s
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className={`text-center my-5`}>PESAN SEKARANG</h3>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
          <div className="col">
            <div className="card text-bg-dark h-100">
              <img src="/images/transaksiBg.png" className="card-img" alt="gambar" />
              <div className="card-img-overlay d-flex align-items-center flex-column justify-content-around">
                <h4 className="card-title">Transaksi</h4>
                <p className="card-text">Jual, Tukar Tambah dan Pemesanan Mobil.</p>
                <button type="button" className="btn btn-outline-primary" onClick={()=>{router.push("/transaksi")}}>Selengkapnya</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-bg-dark h-100">
              <img src="/images/salonBg.png" className="card-img" alt="gambar"/>
              <div className="card-img-overlay d-flex align-items-center flex-column justify-content-around">
                <h4 className="card-title">Salon Mobil</h4>
                <p className="card-text">Layanan untuk membuat mobil Anda terlihat seperti baru !</p>
                <button type="button" className="btn btn-outline-primary" onClick={()=>{router.push("/transaksi")}}>Selengkapnya</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-bg-dark h-100">
              <img src="/images/inspeksiBg.png" className="card-img" alt="gambar" />
              <div className="card-img-overlay d-flex align-items-center flex-column justify-content-around">
                <h4 className="card-title">Jasa Inspeksi</h4>
                <p className="card-text">Dapatkan laporan lengkap mengenai mobil yang ingin Anda beli !</p>
                <button type="button" className="btn btn-outline-primary" onClick={()=>{router.push("/transaksi")}}>Selengkapnya</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <h3 className={`text-center my-5`}>FAQ</h3>

      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-evenly mb-3">
          <div className="list-group w-75 w-sm-100 mx-5 mb-3">
            <button type="button" className="list-group-item list-group-item-action active">
              Pertanyaan Umum
            </button>
            <button type="button" className="list-group-item list-group-item-action" onClick={()=>{router.push("/transaksi")}}>
              Beli Mobil
            </button>
            <button type="button" className="list-group-item list-group-item-action" onClick={()=>{router.push("/transaksi")}}>
              Jual Mobil
            </button>
            <button type="button" className="list-group-item list-group-item-action" onClick={()=>{router.push("/transaksi")}}>
              Kredit
            </button>
            <button type="button" className="list-group-item list-group-item-action" onClick={()=>{router.push("/transaksi")}}>
              Tukar Tambah
            </button>
          </div>
          <div>
            <h5>Pertanyaan Umum</h5>
            <div className="ms-4 mt-4">
              <h6>Siapa BDL Mobilindo ?</h6>
              <p>BDL Mobilindo adalah showroom mobil bekas berkualitas yang berdiri pada tahun 2018.</p>
              <h6>Apa layanan BDL Mobilindo ?</h6>
              <p>Showroom BDL Mobilindo Merupakan perusahaan yang bergerak dalam bidang jual dan beli mobil bekas.</p>
              <h6>Apa layanan BDL Mobilindo ?</h6>
              <p>Showroom BDBDL Mobilindo menjual beragam merek dan tipe mobil bekas berkualitas. Semua mobil yang 
                 kami jual bisa langsung dipakai karena sudah melalui proses seleksi, rekondisi, dan quality control.  
                 Selain itu, BDL Mobilindo memberikan garansi pembelian kembali atau buyback guarantee dengan lima poin 
                 jaminan, yaitu: 1. Semua dokumen dijamin asli 2. Bebas kecelakaan 3. Bebas banjir 4. 
                 Nomor rangka dan mesin yang sesuai dengan dokumen 5. Kondisi odometer terjamin (tidak diputar balik)BDL 
                 Mobilindo Merupakan perusahaan yang bergerak dalam bidang jual dan beli mobil bekas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>   
  )
}
