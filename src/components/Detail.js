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
import { SRLWrapper } from "simple-react-lightbox";
import Navbar from "./Navbar";
function Detail() {
  const options = {
    buttons: {
      backgroundColor: "rgba(30,30,36,0)",
      iconColor: "rgba(255, 255, 255, 0.8)",
      iconPadding: "10px",
      showAutoplayButton: false,
      showCloseButton: false,
      showDownloadButton: false,
      showFullscreenButton: false,
      showNextButton: true,
      showPrevButton: true,
      showThumbnailsButton: false,
      size: "60px",
    },
  };
  return (
    <>
      <Navbar />
      <Container>
        <SRLWrapper options={options}>
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
        </SRLWrapper>
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
          <h3>Keterangan</h3>
          <p>
            Berlokasi di Foresta Studento BSD City, co-living ini adalah hunian
            ideal bagi mahasiswa, karyawan, bahkan suami istri yang mencari kost
            eksklusif di area BSD. Dengan posisi yang strategis, Rukita Foresta
            juga memberi akses mudah ke kampus Prasetya Mulya, ICE BSD, Aeon
            Mall, dan berbagai perkantoran seperti Grha Unilever. Semuanya
            berjarak hanya 5 menit berkendara atau 15 menit berjalan kaki. Semua
            kamar di Rukita Foresta sudah dilengkapi furnitur, termasuk kamar
            mandi dalam, AC, WiFi, water heater, dan fasilitas laundry dan
            cleaning kamar tanpa biaya tambahan. Untuk melindungi penghuni dari
            paparan COVID-19, unit Rukita ini disterilkan secara rutin oleh Tim
            Kebersihan kami. Semua unit Rukita juga dilengkapi dengan hand
            sanitizer dan termometer yang bisa digunakan baik oleh penghuni
            maupun semua tamu yang berkunjung.
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
        <Location>
          <h3>Lokasi</h3>
          <WrapperLocation>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15923.058379053375!2d122.0496515!3d-3.8606185499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d9848902aab2275%3A0x51ee32fb330f7eae!2sNugraha%20Hotel!5e0!3m2!1sen!2sid!4v1647749380813!5m2!1sen!2sid"
              loading="lazy"
            ></iframe>
          </WrapperLocation>
        </Location>
        <CTA>
          <LeftCTA>
            <Title>
              Kost Apik UMS Melati Indah Tipe A Laweyan Surakarta 3L8F4A8C
            </Title>
            <Adress>
              <span>
                Studento Blok L 22/9. Foresta, BSD City. Pagedangan. Banten,
                Tangerang, Banten 15331
              </span>
            </Adress>
          </LeftCTA>
          <RightCTA>
            <Price>IDR 650.000 / Bulan</Price>
            <Button>Hubungi Pemilik</Button>
          </RightCTA>
        </CTA>
      </Container>
    </>
  );
}

export default Detail;

const Container = styled.div`
  padding: 20px 3vw;
  padding-bottom: 50px;
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

  @media (max-width: 768px) {
    height: 40vw;
  }

  @media (max-width: 426px) {
    height: 50vw;
  }
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

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: unset;
    gap: 6px;
    margin-top: 20px;
  }
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
    margin-bottom: 16px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
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

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 20px;
  }
`;

const Description = styled.div`
  margin: 30px 0;
  padding: 30px 0;
  border-top: 1px solid lightgray;
  h3 {
    font-size: 24px;
    margin-bottom: 16px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 26px;
  }
`;
const Location = styled.div`
  margin: 30px 0;
  padding: 30px 0;
  border-top: 1px solid lightgray;
  h3 {
    font-size: 24px;
    margin-bottom: 16px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;
const WrapperLocation = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  iframe {
    width: 100%;
    min-height: 400px;
    border: none;
  }
`;

const CTA = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  padding: 20px 3vw;
  justify-content: space-between;
  gap: 4px;
  box-shadow: rgb(0 0 0 / 8%) 0px 4px 32px 4px;
  align-items: center;
  ${Title} {
    font-size: 16px;
  }

  ${Adress} {
    font-size: 16px;
    color: #666666;
  }
`;

const LeftCTA = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightCTA = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
  }
`;

const Price = styled.div`
  font-weight: 500;
`;

const Button = styled.div`
  border-radius: 4px;
  font-weight: 400;
  padding: 12px 32px;
  font-size: 16px;
  color: white;
  display: flex;
  background: #35b0a7;
  border-color: #35b0a7;
  cursor: pointer;
  white-space: nowrap;
`;
