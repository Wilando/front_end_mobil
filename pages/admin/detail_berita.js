import { useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Component
import NavbarAndSidebar from "../../components/admin/NavbarAndSidebar.js";
// Css
import style from "../../styles/kelolaAkun.module.css";

export default function TambahBerita() {
  const router = useRouter();
  const { kategori, judul } = router.query;

  return (
    <>
    <Head>
       <title>Detail Berita</title>
       <meta name="description" />
       <link rel="icon" href="/logo_bdl.png" />
    </Head>
    <NavbarAndSidebar>
      <div className={`${style.kotakUtama} mt-4 pb-4 mb-4`}>
        <div className={`${style.kotakAtas}`}>
          <div className={`d-flex flex-row justify-content-between align-items-center p-3`}>
            <h6>Kelola Berita</h6>

          </div>
        </div>

        <h6 className="ms-3 mt-5">Detail Berita Website BDL Mobilindo</h6>
        <div className="d-flex flex-column mx-5 mt-5">
          <div className="row mb-3">
            <label htmlFor="kategori" className="col-sm-2 col-form-label">Nama Kategori</label>
            <div className="col-sm-10">
              <select className="form-select" value={kategori} disabled>
                <option>Pilih Kategori</option>
                <option value="NEWS" >News</option>
                <option value="PEDIA">Pedia</option>
                <option value="TIPS">Tips</option>
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="gambar" className="col-sm-2 col-form-label">Foto Berita</label>
            <div className="col-sm-10">
              <img src="/images/mobilBerita.png" alt="gambar" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="judul" className="col-sm-2 col-form-label">Judul Berita</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="judul" value={judul} disabled/>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="pembuka" className="col-sm-2 col-form-label">Teks Pembuka</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="pembuka" 
                value="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                disabled
              />
            </div>
          </div>
          <div class="row mb-3">
            <label htmlFor="konten" class="col-sm-2 col-form-label">Konten Berita</label>
            <div className="col-sm-10">
              <textarea class="form-control" id="konten" rows="10" value="" 
                value={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`}
                disabled>
                  
              </textarea>
            </div>
          </div>
        </div>
      </div>
    </NavbarAndSidebar> 
    </>
  )
}