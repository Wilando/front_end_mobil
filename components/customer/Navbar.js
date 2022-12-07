import Link from 'next/link';
import logo from '../../public/logo_bdl.png';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Navbar() {

  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Image className="navbar-brand" src={logo} alt="Logo"/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample05">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${router.pathname == "/" && 'active'}`} href="/">
                BERANDA
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${router.pathname == "/daftar_mobil" && 'active'}`} href="/daftar_mobil">DAFTAR MOBIL</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${router.pathname == "/berita" && 'active'}`} href="/berita">BERITA</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${router.pathname == "/transaksi" && 'active'}`} href="/transaksi">TRANSAKSI</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${router.pathname == "/promo" && 'active'}`} href="/promo">PROMO</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${router.pathname == "/mobil_terjual" && 'active'}`} href="/mobil_terjual">MOBIL TERJUAL</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${router.pathname == "/tentang_kami" && 'active'}`} href="/tentang_kami">TENTANG KAMI</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
