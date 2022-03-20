import React from "react";
import styled from "styled-components";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import NetworkWifi2BarOutlinedIcon from "@mui/icons-material/NetworkWifi2BarOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import HomeMaxOutlinedIcon from "@mui/icons-material/HomeMaxOutlined";
function Detail() {
  return (
    <Container>
      <Gallery>
        <Left>
          <img
            src="https://cdn.rukita.co/rukita/fit/800x500/media/buildings/building/Rukita-Foresta-BSD-9_Feb2020_12.jpg"
            alt=""
          />
        </Left>
        <Right>
          <img
            src="https://cdn.rukita.co/rukita/fit/800x500/media/buildings/building/Rukita-Foresta-BSD-9_Feb2020_20.jpg"
            alt=""
          />
          <img
            src="https://ksassets.timeincuk.net/wp/uploads/sites/56/2021/01/Small-bedroom-Ideal-Home.jpg"
            alt=""
          />
        </Right>
      </Gallery>
      <Title>
        Kost Apik UMS Melati Indah Tipe A Laweyan Surakarta 3L8F4A8C
      </Title>
      <Info>
        <TypeKost>
          <PersonRoundedIcon className="icon" />
          <span>Campur</span>
        </TypeKost>
        <Adress>
          <FmdGoodRoundedIcon className="icon" />
          <span>
            Studento Blok L 22/9. Foresta, BSD City. Pagedangan. Banten,
            Tangerang, Banten 15331
          </span>
        </Adress>
      </Info>
      <Description>
        <h3>Deskripsi</h3>
        <p>
          Berlokasi di Foresta Studento BSD City, co-living ini adalah hunian
          ideal bagi mahasiswa, karyawan, bahkan suami istri yang mencari kost
          eksklusif di area BSD. Dengan posisi yang strategis, Rukita Foresta
          juga memberi akses mudah ke kampus Prasetya Mulya, ICE BSD, Aeon Mall,
          dan berbagai perkantoran seperti Grha Unilever. Semuanya berjarak
          hanya 5 menit berkendara atau 15 menit berjalan kaki. Semua kamar di
          Rukita Foresta sudah dilengkapi furnitur, termasuk kamar mandi dalam,
          AC, WiFi, water heater, dan fasilitas laundry dan cleaning kamar tanpa
          biaya tambahan. Untuk melindungi penghuni dari paparan COVID-19, unit
          Rukita ini disterilkan secara rutin oleh Tim Kebersihan kami. Semua
          unit Rukita juga dilengkapi dengan hand sanitizer dan termometer yang
          bisa digunakan baik oleh penghuni maupun semua tamu yang berkunjung.
        </p>
      </Description>
      <Fasilitas>
        <h3>Fasilitas</h3>
        <WrapperFasilitas>
          <FasilitasItem>
            <BathtubOutlinedIcon className="icon_fasilitas" />
            <span>Kamar Mandi Dalam</span>
          </FasilitasItem>
          <FasilitasItem>
            <Inventory2OutlinedIcon className="icon_fasilitas" />
            <span>Lemari Baju</span>
          </FasilitasItem>
          <FasilitasItem>
            <NetworkWifi2BarOutlinedIcon className="icon_fasilitas" />
            <span>Wifi</span>
          </FasilitasItem>
          <FasilitasItem>
            <HomeMaxOutlinedIcon className="icon_fasilitas" />
            <span>Bantal</span>
          </FasilitasItem>
          <FasilitasItem>
            <BedOutlinedIcon className="icon_fasilitas" />
            <span>Kasur</span>
          </FasilitasItem>
          <FasilitasItem>
            <WindowOutlinedIcon className="icon_fasilitas" />
            <span>Jendela</span>
          </FasilitasItem>
        </WrapperFasilitas>
      </Fasilitas>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  padding: 20px 3vw;
`;

const Gallery = styled.div`
  display: flex;
  gap: 10px;
  height: 30vw;
  margin-bottom: 30px;
  box-shadow: rgb(0 0 0 / 8%) 0px 4px 32px 4px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;
const Left = styled.div`
  width: 60%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Right = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    width: 100%;
    height: 49%;
    object-fit: cover;
  }
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
`;

const TypeKost = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  span {
    font-size: 14px;
    color: #646464;
  }

  .icon {
    color: #646464;
    transform: scale(0.9);
  }
`;

const Adress = styled(TypeKost)`
  span {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Fasilitas = styled.div`
  margin: 30px 0;
  padding: 30px 0;
  border-top: 1px solid lightgray;

  h3 {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const FasilitasItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  span {
    font-size: 14px;
    font-weight: 300;
  }

  .icon_fasilitas {
    color: #35b0a7;
  }
`;

const WrapperFasilitas = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  row-gap: 10px;
`;

const Description = styled.div`
  margin: 30px 0;
  padding: 30px 0;
  border-top: 1px solid lightgray;
  h3 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 26px;
  }
`;
