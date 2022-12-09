import { useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Component
import NavbarAndSidebar from "../../components/admin/NavbarAndSidebar.js";
// Css
import style from "../../styles/kelolaAkun.module.css";

export default function KelolaPendapatan() {
  const router = useRouter();

  return (
    <>
    <Head>
       <title>Kelola Pendapatan</title>
       <meta name="description" />
       <link rel="icon" href="/logo_bdl.png" />
    </Head>
    <NavbarAndSidebar>
      <div className={`${style.kotakUtama} mt-4 pb-4 mb-4 dummyContainer`}>
        <div className={`${style.kotakAtas}`}>
          <div className={`d-flex flex-row justify-content-between align-items-center p-3`}>
            <h6>Kelola Pendapatan Showroom BDL Mobilindo</h6>
          </div>
        </div>
        
      </div>
    </NavbarAndSidebar> 
    </>
  )
}