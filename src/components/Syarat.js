import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { db } from "../firebaseConfig";
import KostItem from "./KostItem";
import Navbar from "./Navbar";
import KostPopuler from "./KostPopuler";
import Footer from "./Footer";
const Syarat = () => {
  const { area } = useParams();
  const [kosts, setKosts] = useState([]);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "kost"), orderBy("nama_kost", "asc")),
      (snapshot) => {
        setKosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      }
    );
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Header>
          <h1>Syarat dan Ketentuan</h1>
        </Header>
        <p>
          Dengan mengunjungi, menggunakan, mengakses dan/atau mendaftarkan diri
          Anda pada platform Kami, Anda dianggap telah membaca, mengerti,
          memahami dan menyetujui seluruh isi yang tertuang dalam Syarat dan
          Ketentuan (selanjutnya disebut, “S&K”) ini. Jika Anda tidak setuju
          untuk terikat dengan S&K in maka Anda tidak diperkenankan untuk
          mengakses dan/atau menggunakan platform Kami. S&K ini merupakan bentuk
          Perjanjian yang sah dan mengikat antara Anda dengan Kami.
        </p>
        <ol>
          <li>Ruang Lingkup</li>
          <p>
            Untuk menggunakan platform ini Kami menyarankan Anda sudah berusia
            18 tahun, apabila Anda berusia dibawah 18 tahun silahkan untuk
            mengakses maupun menggunakan platform ini dengan pengawasan dari
            orang tua atau wali Anda
          </p>
          <li>Akun Anda</li>
          <p>
            Untuk dapat menggunakan secara penuh atau sebagian fitur yang
            tersedia pada platform Kami, Anda diminta untuk melakukan
            pendaftaran dan membuat akun pada platform Kami. Untuk kepentingan
            pendaftaraan ini Kami akan mengumpulkan dan memproses informasi yang
            Anda berikan termasuk namun tidak terbatas pada identitas diri,
            informasi alamat surat elektronik (e-mail), nomor handphone maupun
            informasi lainnya yang harus Anda isikan pada platform
          </p>
          <li>Hak Kekayaan Intelektual dan Konten pada Platform</li>
          <p>
            Segala hak kekayaan intelektual yang terkandung dalam platform
            adalah hak milik Kami, hal ini termasuk namun tidak terbatas pada
            perangkat lunak (software), teks, data, grafik, gambar, suara,
            video, merek dagang, logo, ikon, kode html dan kode lainnya di situs
            ataupun aplikasi ini dilarang untuk dipublikasikan, dimodifikasi,
            digandakan, direproduksi atau diubah sedemikian rupa dengan cara apa
            pun tanpa izin tertulis dari Kami. Anda memahami bahwa Kami berhak
            untuk mengambil langkah secara hukum baik perdata maupun pidana
            terhadap pelanggaran S&K ini.
          </p>
        </ol>
      </Container>
    </>
  );
};

export default Syarat;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 3vw;
  background-color: #fafafa;
  min-height: 100vh;

  p {
    font-size: 16px;
    line-height: 24px;
  }

  ol {
    margin-top: 20px;
  }
`;

const Header = styled.div`
  background: linear-gradient(63.39deg, #14a01d 24.71%, #6dcf73 94.69%);
  box-shadow: 0 16px 32px rgb(98 197 105 / 15%);
  height: 278px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  h1 {
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    margin-left: 20px;
  }
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;
