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
       <title>Detail Berita</title>
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
     
      <h2 className="mt-5">
        Lorem Ipsum is simply dummy text  of the printing and typesetting industry.
      </h2>

      <img className="img-fluid mt-4" src="/images/detailBerita.png" alt="images" />

      <p className="mt-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
      </p>

    </div>

    <div className="col-md-4">
      <div className="sticky-top overflow-auto">
        <div className="p-4 mb-3">
          <h4 className="mb-4">Berita Terbaru</h4>
          <ol className="list-unstyled mb-0">
            <li className="mb-3"><a href="#" className="border-bottom w-75 text-muted">Mazda CX-30 2022 Menjadi Leb...</a></li>
            <li className="mb-3"><a href="#" className="border-bottom w-75 text-muted">Laris Manus, Tesla Catat Rekor P..</a></li>
            <li className="mb-3"><a href="#" className="border-bottom w-75 text-muted">Pelat Nomor Kendaraan Warna P..</a></li>
            <li className="mb-3"><a href="#" className="border-bottom w-75 text-muted">Penggunaan Fitur Cruise Control ..</a></li>
            <li><a href="#" className="border-bottom w-75 text-muted">Porsche Bangun Jaringan Pengi...</a></li>
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