import { useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
// Component
import Navbar from "../components/customer/Navbar";
import Footer from "../components/customer/Footer";
//CSS
import style from "../styles/berita.module.css";

export default function Berita() {
	const router = useRouter();

  return (
    <>
  	<Head>
       <title>Berita</title>
       <meta name="description" />
       <link rel="icon" href="/logo_bdl.png" />
    </Head>
    <Navbar />

    <div className={`container-fluid ${style.bg} py-5`}>
      <h4 className="text-center">BERITA BDL MOBILINDO</h4>
    </div>

    <div className="row g-4 m-0 ms-5 mt-4">
    <div className="col-md-8">
      <h3 className="pb-4 mb-2 border-bottom">
        NEWS
      </h3>
     
      <div className="row row-cols-3 mt-4">
        <div className="col mb-3">
          <img src="/images/mobilList.png" alt="image"/>
          <h6 className="mt-3">Lorem Ipsum is simply dummy text of the printing and ...</h6>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
          </p>
          <Link href="/detail_berita">Selengkapnya</Link>
        </div>
        <div className="col mb-3">
          <img src="/images/mobilList.png" alt="image"/>
          <h6 className="mt-3">Lorem Ipsum is simply dummy text of the printing and ...</h6>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
          </p>
          <Link href="/detail_berita">Selengkapnya</Link>
        </div>
        <div className="col mb-3">
          <img src="/images/mobilList.png" alt="image"/>
          <h6 className="mt-3">Lorem Ipsum is simply dummy text of the printing and ...</h6>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
          </p>
          <Link href="/detail_berita">Selengkapnya</Link>
        </div>
        <div className="col mb-3">
          <img src="/images/mobilList.png" alt="image"/>
          <h6 className="mt-3">Lorem Ipsum is simply dummy text of the printing and ...</h6>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
          </p>
          <Link href="/detail_berita">Selengkapnya</Link>
        </div>
        <div className="col mb-3">
          <img src="/images/mobilList.png" alt="image"/>
          <h6 className="mt-3">Lorem Ipsum is simply dummy text of the printing and ...</h6>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
          </p>
          <Link href="/detail_berita">Selengkapnya</Link>
        </div>
        <div className="col mb-3">
          <img src="/images/mobilList.png" alt="image"/>
          <h6 className="mt-3">Lorem Ipsum is simply dummy text of the printing and ...</h6>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
          </p>
          <Link href="/detail_berita">Selengkapnya</Link>
        </div>
      </div>

      <h3 className="pb-4 mb-2 mt-4 border-bottom">
        TIPS
      </h3>

      <div className="d-flex flex-row mb-3">
        <div>
         <img src="/images/tipsList.png" />
         <h6 className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
         <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        
        <div className="p-2">
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center mb-3">
              <div className="flex-shrink-0">
                <img className={`${style.gambarTips}`} src="/images/mobilList.png" alt="gambar"/>
              </div>
              <div className="flex-grow-1 ms-3">
                Lorem Ipsum is simply ...
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <div className="flex-shrink-0">
                <img className={`${style.gambarTips}`} src="/images/mobilList.png" alt="gambar"/>
              </div>
              <div className="flex-grow-1 ms-3">
                Lorem Ipsum is simply ...
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <div className="flex-shrink-0">
                <img className={`${style.gambarTips}`} src="/images/mobilList.png" alt="gambar"/>
              </div>
              <div className="flex-grow-1 ms-3">
                Lorem Ipsum is simply ...
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <div className="flex-shrink-0">
                <img className={`${style.gambarTips}`} src="/images/mobilList.png" alt="gambar"/>
              </div>
              <div className="flex-grow-1 ms-3">
                Lorem Ipsum is simply ...
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="pb-4 mb-2 border-bottom">
        PEDIA
      </h3>

      <img className="my-3" src="/images/mobilPedia.png" alt="images" />

      <div className="row row-cols-2 mb-5">
        <div className="col">
          <div className="d-flex align-items-center mb-3">
            <div className="flex-shrink-0">
              <img className={`${style.gambarTips}`} src="/images/mobilList.png" alt="gambar"/>
            </div>
            <div className="flex-grow-1 ms-3">
              Lorem Ipsum is simply dummy text of the printing ....
            </div>
          </div>
        </div>
        <div className="col">
          <div className="d-flex align-items-center mb-3">
            <div className="flex-shrink-0">
              <img className={`${style.gambarTips}`} src="/images/mobilList.png" alt="gambar"/>
            </div>
            <div className="flex-grow-1 ms-3">
              Lorem Ipsum is simply dummy text of the printing ....
            </div>
          </div>
        </div>
        <div className="col">
          <div className="d-flex align-items-center mb-3">
            <div className="flex-shrink-0">
              <img className={`${style.gambarTips}`} src="/images/mobilList.png" alt="gambar"/>
            </div>
            <div className="flex-grow-1 ms-3">
              Lorem Ipsum is simply dummy text of the printing ....
            </div>
          </div>
        </div>
        <div className="col">
          <div className="d-flex align-items-center mb-3">
            <div className="flex-shrink-0">
              <img className={`${style.gambarTips}`} src="/images/mobilList.png" alt="gambar"/>
            </div>
            <div className="flex-grow-1 ms-3">
              Lorem Ipsum is simply dummy text of the printing ....
            </div>
          </div>
        </div>
        <div className="col">
          <div className="d-flex align-items-center mb-3">
            <div className="flex-shrink-0">
              <img className={`${style.gambarTips}`} src="/images/mobilList.png" alt="gambar"/>
            </div>
            <div className="flex-grow-1 ms-3">
              Lorem Ipsum is simply dummy text of the printing ....
            </div>
          </div>
        </div>
        <div className="col">
          <div className="d-flex align-items-center mb-3">
            <div className="flex-shrink-0">
              <img className={`${style.gambarTips}`} src="/images/mobilList.png" alt="gambar"/>
            </div>
            <div className="flex-grow-1 ms-3">
              Lorem Ipsum is simply dummy text of the printing ....
            </div>
          </div>
        </div>
      </div>

    </div>

    <div className="col-md-4">
      <div className="sticky-top overflow-auto">
        <div className="p-4 mb-3">
          <h4 className="mb-4">Berita Terbaru</h4>
          <ol className="list-unstyled mb-0">
            <li className="mb-3"><Link href="detail_berita" className="border-bottom w-75 text-muted">Mazda CX-30 2022 Menjadi Leb...</Link></li>
            <li className="mb-3"><Link href="detail_berita" className="border-bottom w-75 text-muted">Laris Manus, Tesla Catat Rekor P..</Link></li>
            <li className="mb-3"><Link href="detail_berita" className="border-bottom w-75 text-muted">Pelat Nomor Kendaraan Warna P..</Link></li>
            <li className="mb-3"><Link href="detail_berita" className="border-bottom w-75 text-muted">Penggunaan Fitur Cruise Control ..</Link></li>
            <li><Link href="detail_berita" className="border-bottom w-75 text-muted">Porsche Bangun Jaringan Pengi...</Link></li>
          </ol>
        </div>

        <div className="p-4">
          <h4 className="">Berita Populer</h4>
          <div className="d-flex flex-column mb-3">
            <div className="d-flex mb-5">
              <div className="flex-shrink-0">
                <img src="/images/mobilBerita.png" alt="gambar"/>
              </div>
              <div className="d-flex flex-column justify-content-between">
                <div className="flex-grow-1 ms-3">
                  <span className={`${style.tips} py-1 px-2`}>Tips</span>
                </div>
                <div className="flex-grow-1 ms-3">
                  Lorem Ipsum is simply ...
                </div>
              </div>
            </div>
            <div className="d-flex mb-5">
              <div className="flex-shrink-0">
                <img src="/images/mobilBerita.png" alt="gambar"/>
              </div>
              <div className="d-flex flex-column justify-content-between">
                <div className="flex-grow-1 ms-3">
                  <span className={`${style.news} py-1 px-2`}>News</span>
                </div>
                <div className="flex-grow-1 ms-3">
                  Lorem Ipsum is simply ...
                </div>
              </div>
            </div>
            <div className="d-flex mb-5">
              <div className="flex-shrink-0">
                <img src="/images/mobilBerita.png" alt="gambar"/>
              </div>
              <div className="d-flex flex-column justify-content-between">
                <div className="flex-grow-1 ms-3">
                  <span className={`${style.pedia} py-1 px-2`}>Pedia</span>
                </div>
                <div className="flex-grow-1 ms-3">
                  Lorem Ipsum is simply ...
                </div>
              </div>
            </div>
            <div className="d-flex mb-4">
              <div className="flex-shrink-0">
                <img src="/images/mobilBerita.png" alt="gambar"/>
              </div>
              <div className="d-flex flex-column justify-content-between">
                <div className="flex-grow-1 ms-3">
                  <span className={`${style.tips} py-1 px-2`}>Tips</span>
                </div>
                <div className="flex-grow-1 ms-3">
                  Lorem Ipsum is simply ...
                </div>
              </div>
            </div>
            <div className="d-flex mb-5">
              <div className="flex-shrink-0">
                <img src="/images/mobilBerita.png" alt="gambar"/>
              </div>
              <div className="d-flex flex-column justify-content-between">
                <div className="flex-grow-1 ms-3">
                  <span className={`${style.news} py-1 px-2`}>News</span>
                </div>
                <div className="flex-grow-1 ms-3">
                  Lorem Ipsum is simply ...
                </div>
              </div>
            </div>
            <div className="d-flex mb-5">
              <div className="flex-shrink-0">
                <img src="/images/mobilBerita.png" alt="gambar"/>
              </div>
              <div className="d-flex flex-column justify-content-between">
                <div className="flex-grow-1 ms-3">
                  <span className={`${style.pedia} py-1 px-2`}>Pedia</span>
                </div>
                <div className="flex-grow-1 ms-3">
                  Lorem Ipsum is simply ...
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  </div>

    <Footer/>
    </>
  )
}