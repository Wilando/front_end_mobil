import { useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
//CSS
import style from "../../styles/login.module.css";

export default function Login() {
	const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [wrongPass, setWrongPass] = useState() 

  const login = ()=>{
    if(username === "admin" && password === "123456"){
      localStorage.setItem('username', 'admin')
      localStorage.setItem('role', 'admin')
      router.push("/admin/dashboard");
      setWrongPass(false);
    }
    else if(username === "superAdmin" && password === "123456"){
      localStorage.setItem('username', 'superAdmin')
      localStorage.setItem('role', 'superAdmin')
      router.push("/admin/dashboard");
      setWrongPass(false);
    }
    else if(username === "inspector" && password === "123456"){
      localStorage.setItem('username', 'inspector')
      localStorage.setItem('role', 'inspector')
      router.push("/admin/dashboard");
      setWrongPass(false);
    }
    else{
      setWrongPass(true);
    }
  }


  return (
    <>
  	<Head>
       <title>Login Admin</title>
       <meta name="description" />
       <link rel="icon" href="/logo_bdl.png" />
    </Head>
    <div className={`${style.bg} container-fluid d-flex align-items-center justify-content-center`}>
      <div className={`${style.bgForm} ${style.formSignin}`}>
        <div className="text-center">
          <img src="/bdl.png" alt="images" />
        </div>
        <p className="text-center h3 my-5">Account Login</p>
        <div className="form-floating mb-3">
          <input type="text" className={`${style.borderBottom} shadow-none form-control`} 
            id="floatingInput" placeholder="name@example.com"
            onChange ={(event)=>{setUsername(event.target.value)} }
            value= {username}
          />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating">
          <input type="password" className={`${style.borderBottom} shadow-none form-control`} 
            id="floatingPassword" placeholder="Password"
            onChange ={(event)=>{setPassword(event.target.value)} }
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        { wrongPass &&
          <div className={`my-2 alert alert-danger`} role="alert">
            Username atau Password Salah!
          </div>
        }
        <div className="d-grid gap-2 mt-5">
          <button className="btn btn-primary" type="button" onClick={login}>Login To Your Account</button>
        </div>
        <Link href="/admin/forgot_password" className="text-muted text-decoration-none text-center">
          <p>Forgot your password?</p>
        </Link>
      </div>
    </div>
    </>
  )
}