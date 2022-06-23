import React from "react";
import styled from "styled-components";
import { Title } from "./KostList";
import { Link } from "react-router-dom";

function KostPopuler() {
  const areas = [
    {
      id: 1,
      img: "https://img.inews.co.id/media/600/files/inews_new/2021/09/20/10_tempat_Wisata_di_Makassar.JPG",
      area: "Makassar",
    },
    {
      id: 2,
      img: "https://apollo-singapore.akamaized.net/v1/files/r5t1ifexqt0e2-ID/image;s=850x0",
      area: "Rappocini",
    },
    {
      id: 3,
      img: "https://imganuncios.mitula.net/rumah_mewah_bukit_villa_panakukang_mas_harga_termurah_1540039645362207037.jpg",
      area: "Panakukang",
    },
    {
      id: 4,
      img: "https://cdn-2.tstatic.net/makassar/foto/bank/images/citragrand-galesong-city-merilis-rumah-tipe-baru-dengan-harga-terjangkau.jpg",
      area: "Gowa",
    },
    {
      id: 5,
      img: "https://id1-cdn.pgimgs.com/listing/18330017/UPHO.103965206.V800/PERUMAHAN-GIGIT-JALAN-POROS-PERINTIS-KEMERDEKAAN-Makassar-Indonesia.jpg",
      area: "Perintis",
    },
    {
      id: 6,
      img: "https://sikumbang.ppdpp.id/public/upload/1632982021375-56c847c0-5928-4487-9180-ce6206bb32cb.jpg",
      area: "Tamalanrea",
    },
    {
      id: 7,
      img: "https://imganuncios.mitula.net/rumah_dijual_di_tamalate_makassar_5750014646139605470.jpg",
      area: "Tallo",
    },
    {
      id: 8,
      img: "https://sulselekspres.com/wp-content/uploads/2018/12/64e89baf-bfb7-467f-92c4-6ef3c4957ada_169.jpg",
      area: "Sudiang",
    },
  ];
  return (
    <Container>
      <Title>Area Kost Populer</Title>
      <Wrapper>
        {areas.map((area) => (
          <Link to={`/area-populer/${area.area.toLowerCase()}`} key={area.id}>
            <Item key={area.id}>
              <img src={area.img} alt="" />
              <span>{area.area}</span>
            </Item>
          </Link>
        ))}
      </Wrapper>
    </Container>
  );
}

export default KostPopuler;

const Container = styled.div`
  padding: 20px 3vw;
`;

const Wrapper = styled.div`
  padding-top: 10px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
`;

const Item = styled.div`
  background-color: gray;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  height: 10vw;
  background-color: black;
  cursor: pointer;
  transition: all 300ms;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* opacity: 0.7; */
  }

  span {
    position: absolute;
    z-index: 2;
    display: flex;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 600;
    color: white;
  }

  &:after {
    content: "";
    background-image: linear-gradient(
      to top,
      rgba(3, 11, 23, 0.6),
      rgba(3, 11, 23, 0.3)
    );
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    position: absolute;
    transition: all 3s;
  }

  &:hover {
    transform: scale(1.05);
  }
`;
