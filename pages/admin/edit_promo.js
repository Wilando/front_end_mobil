import { useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Component
import NavbarAndSidebar from "../../components/admin/NavbarAndSidebar.js";
// Css
import style from "../../styles/kelolaAkun.module.css";

export default function EditPromo() {
  const router = useRouter();
  const { namaPromo, periode } = router.query;

  return (
    <>
    <Head>
       <title>Edit Promo</title>
       <meta name="description" />
       <link rel="icon" href="/logo_bdl.png" />
    </Head>
    <NavbarAndSidebar>
      <div className={`${style.kotakUtama} mt-4 pb-4 mb-4`}>
        <div className={`${style.kotakAtas}`}>
          <div className={`d-flex flex-row justify-content-between align-items-center p-3`}>
            <h6>Kelola Promo</h6>

          </div>
        </div>

        <h6 className="ms-3 mt-5">Edit Promo Website BDL Mobilindo</h6>
        <div className="d-flex flex-column mx-5 mt-5">
          <div className="row mb-3">
            <label htmlFor="periode" className="col-sm-2 col-form-label">Periode</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="periode" value={periode} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="judul" className="col-sm-2 col-form-label">Nama Promo</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="judul" value={namaPromo} />
            </div>
          </div>
          <div class="row mb-3">
            <label htmlFor="sk" class="col-sm-2 col-form-label">S&K</label>
            <div className="col-sm-10">
              <textarea class="form-control" id="sk" rows="10" value="" 
                value={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                  Aldus PageMaker including versions of Lorem Ipsum.`}
                >
                  
              </textarea>
            </div>
          </div>
        </div>
      </div>
    </NavbarAndSidebar> 
    </>
  )
}