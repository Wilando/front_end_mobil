import Link from 'next/link';
import Image from 'next/image';
// ICON
import wa from '../../public/icons/wa.svg';
import ig from '../../public/icons/ig.svg';
import fb from '../../public/icons/fb.svg';
import yt from '../../public/icons/yt.svg';
// CSS
import style from "../../styles/components/customer/footer.module.css";

export default function Footer() {

  return (
    <div className={`${style.backgroundFooter} container-fluid`}>
      <div className="d-flex justify-content-center py-3 border-bottom">
        <p className="text-center me-3">Social Media:</p>
        <a href="https://www.whatsapp.com/"><Image className="mx-1" src={wa} alt="wa" /></a>
        <a href="https://www.instagram.com/"><Image className="mx-1" src={ig} alt="ig" /></a>
        <a href="https://www.facebook.com/"><Image className="mx-1" src={fb} alt="fb" /></a>
        <a href="https://www.youtube.com/"><Image className="mx-1" src={yt} alt="yt" /></a>
      </div>
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 justify-content-center mt-4">

        <div className="col mb-3">
          <h5>BDL MOBILINDO</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link href="/daftar_mobil" className="nav-link p-0 text-white">Mobil Tersedia</Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="/mobil_terjual" className="nav-link p-0 text-white">Mobil Terjual</Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="/transaksi" className="nav-link p-0 text-white">Transaksi</Link>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>BERITA</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link href="/berita" className="nav-link p-0 text-white">News</Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="/berita" className="nav-link p-0 text-white">Tips</Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="/berita" className="nav-link p-0 text-white">Pedia</Link>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>TENTANG KAMI</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link href="/tentang_kami" className="nav-link p-0 text-white">Profil</Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="/tentang_kami" className="nav-link p-0 text-white">FAQ</Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="/tentang_kami" className="nav-link p-0 text-white">Lokasi Showroom</Link>
            </li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5>HUBUNGI KAMI</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Telephone/WhatsApp</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">0821 - 8096 - 0017</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Jam Kerja 08.00 - 22.00 WIB</a></li>
          </ul>
        </div>
      </footer>
      <div className={`${style.backgroundCr} text-center p-3`}>
      <p >© 2022 Copyright: <strong>BDL MOBILINDO</strong></p>
      </div>
    </div>
  )
}
