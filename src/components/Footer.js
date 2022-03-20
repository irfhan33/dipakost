import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Logo>dipakost</Logo>
      <h1>Cari Info Kost Terbaru</h1>
      <p>
        dipakost adalah sebuah platform yang menyajikan informasi mengenai
        properti Indekos atau kost yang disewakan seluruh Indonesia dilengkapi
        dengan harga kost, fasilitas kost dan gambar kost yang diunggah langsung
        oleh pemilik kost. Platform kami memberikan kemudahan bagi kamu yang
        mencari info kost terdekat di sekitaran daerah yang kamu inginkan.
      </p>

      <p>
        Kemudahan-kemudahan yang diberikan situs kami adalah dengan adanya fitur
        filter harga kost yang bisa disesuaikan dengan kebutuhan, tentunya fitur
        ini akan sangat membantu mendapatkan kos yang sesuai budget dengan lebih
        cepat. Selain itu, terdapat juga filter jenis kost, jam bertamu dan juga
        filter fasilitas kamar kost yang dapat kalian atur sehingga kalian bisa
        mendapatkan kamar kost yang nyaman sesuai kebutuhan kalian.
      </p>

      <p>
        Informasi kos yang disewakan juga langsung diberikan oleh pemilik, yang
        pastinya sudah terkurasi kebenarannya oleh tim kami. Kemudahan juga
        pastinya diberikan tidak hanya kepada pencari kos, tapi juga kepada
        pihak pemilik kos-kosan untuk dapat memasang informasi kos yang
        disewakan. Dengan adanya Cari-Kos.com, transaksi antara pemilik dan
        penyewa dijamin lebih cepat dan mudah. Kami selalu berusaha dengan baik
        untuk dapat memberikan informasi mengenai kos-kosan dari seluruh daerah
        yang ada di Indonesia.
      </p>
      <hr />
      <span>© 2022 dipakost, All rights reserved</span>
    </Container>
  );
}

export default Footer;
const Container = styled.div`
  margin-top: 20px;
  padding: 20px 3vw;
  background-color: #f6fafb;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #003c39;
    font-size: 24px;
    margin-bottom: 30px;
  }

  p {
    color: #003c39;
    max-width: 90%;
    line-height: 24px;
    margin-bottom: 18px;
  }

  span {
    padding-top: 10px;
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;
    border-top: 1px solid lightgray;
  }
`;

const Logo = styled.div`
  font-weight: 600;
  font-size: 34px;
  color: #00b1ac;
  cursor: pointer;
`;
