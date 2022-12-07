import { useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
//CSS
import style from "../../styles/login.module.css";

export default function ForgotPassword() {
	const router = useRouter();

  return (
    <>
  	<Head>
       <title>Forgot Password</title>
       <meta name="description" />
       <link rel="icon" href="/logo_bdl.png" />
    </Head>
    <div className={`${style.bg} container-fluid d-flex align-items-center justify-content-center`}>
      <div className={`${style.bgForm} ${style.formSignin}`}>
        <div className="text-center">
          <img src="/bdl.png" alt="images" />
        </div>
        <p className="text-center h3 my-5">Forgot Password</p>
        <p>
          Dapatkan Password.
          Masukan email yang terdaftar!
        </p>
        <div className="form-floating">
          <input type="email" className={`${style.borderBottom} shadow-none form-control`} 
            id="email" placeholder="Password"
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="d-grid gap-2 mt-5">
          <button className="btn btn-primary" type="button">Send Email</button>
        </div>
        <Link href="/admin" className="text-muted text-decoration-none text-center">
          <p>Login?</p>
        </Link>
      </div>
    </div>
    </>
  )
}