import React, { useEffect, useState } from "react";
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
import Navbar, { ModalClose } from "./Navbar";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Modal from "./Modal";

import { db } from "./../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { selectUserName } from "../features/user/userSlice";
function Detail() {
  const navigate = useNavigate();
  const user = useSelector(selectUserName);

  const toLogin = () => {
    alert("Silahkan Login Terlebih Dahulu");
    navigate("/");
  };
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
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getDoc(doc(db, "kost", id)).then((doc) => {
      setData(doc.data());
    });
  }, []);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modal]);

  const buatPesanan = () => {
    addDoc(collection(db, "pesanan"), {
      nama_kost: data.nama_kost,
      alamat: data.alamat,
      type: data.type,
      harga: data.harga,
      user: user,
      statusbayar: 1,
      bukti: null,
    }).then(() => {
      Swal.fire({
        icon: "success",
        title: "Pesanan Berhasil Dibuat",
        showConfirmButton: false,
      });
      navigate("/pesanan");
    });
  };
  return (
    <>
      <Navbar />
      <Container>
        <SRLWrapper options={options}>
          <Gallery>
            <Left>
              <img src={data.gambar1} alt="" />
            </Left>
            <Right>
              <img src={data.gambar2} alt="" />
              <img src={data.gambar3} alt="" />
            </Right>
          </Gallery>
        </SRLWrapper>
        <Title>{data.kost_name}</Title>
        <Info>
          <TypeKost>
            <PersonRoundedIcon className="icon" />
            <span>{data.type}</span>
          </TypeKost>
          <Adress>
            <FmdGoodRoundedIcon className="icon" />
            <span>{data.alamat}</span>
          </Adress>
        </Info>
        <Description>
          <h3>Keterangan</h3>
          <p>{data.keterangan}</p>
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
            <iframe src={data.lokasi_gmaps} loading="lazy"></iframe>
          </WrapperLocation>
        </Location>
        <CTA>
          <LeftCTA>
            <Title>{data.nama_kost}</Title>
            <Adress>
              <span>{data.alamat}</span>
            </Adress>
          </LeftCTA>
          <RightCTA>
            <Price>IDR {data.harga} / Bulan</Price>
            <Button onClick={() => setModal(!modal)}>Pesan</Button>
          </RightCTA>
        </CTA>
      </Container>

      {modal && (
        <>
          <ModalClose
            onClick={() => {
              setModal(!modal);
            }}
          ></ModalClose>
          <Modal>
            <h1>Informasi Pesanan</h1>
            <InformasiPesanan data={data} />

            <ButtonModal onClick={user ? buatPesanan : toLogin}>
              Buat Pesanan
            </ButtonModal>
          </Modal>
        </>
      )}
    </>
  );
}

const InformasiPesanan = ({ data }) => {
  return (
    <>
      <InformasiPesananItem title="Nama Kost" value={data.nama_kost} />
      <InformasiPesananItem title="Alamat" value={data.alamat} />
      <InformasiPesananItem title="Type Kost" value={data.type} />
      <InformasiPesananItem title="Harga" value={data.harga} />
    </>
  );
};

const InformasiPesananItem = ({ title, value }) => {
  return (
    <Wrapper>
      <span>{title} </span> : <p> {value}</p>
    </Wrapper>
  );
};

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
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    min-width: 100px;
  }

  p {
    margin-left: 20px;
  }
`;

const ButtonModal = styled(Button)`
  margin-top: 20px;
`;
