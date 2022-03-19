import React from "react";
import styled from "styled-components";
import { Title } from "./KostList";

function KostPopuler() {
  return (
    <Container>
      <Title>Area Kost Populer</Title>
      <Wrapper>
        <Item>
          <img
            src="https://img.inews.co.id/media/600/files/inews_new/2021/09/20/10_tempat_Wisata_di_Makassar.JPG"
            alt=""
          />
          <span>Makassar</span>
        </Item>
        <Item>
          <img
            src="https://apollo-singapore.akamaized.net/v1/files/r5t1ifexqt0e2-ID/image;s=850x0"
            alt=""
          />
          <span>Rappocini</span>
        </Item>
        <Item>
          <img
            src="https://imganuncios.mitula.net/rumah_mewah_bukit_villa_panakukang_mas_harga_termurah_1540039645362207037.jpg"
            alt=""
          />
          <span>Panakukang</span>
        </Item>
        <Item>
          <img
            src="https://cdn-2.tstatic.net/makassar/foto/bank/images/citragrand-galesong-city-merilis-rumah-tipe-baru-dengan-harga-terjangkau.jpg"
            alt=""
          />
          <span>Gowa</span>
        </Item>
        <Item>
          <img
            src="https://id1-cdn.pgimgs.com/listing/18330017/UPHO.103965206.V800/PERUMAHAN-GIGIT-JALAN-POROS-PERINTIS-KEMERDEKAAN-Makassar-Indonesia.jpg"
            alt=""
          />
          <span>Perintis</span>
        </Item>
        <Item>
          <img
            src="https://imganuncios.mitula.net/rumah_dijual_di_tamalate_makassar_4420014646139432933.jpg"
            alt=""
          />
          <span>Tamalate</span>
        </Item>
        <Item>
          <img
            src="https://id2-cdn.pgimgs.com/listing/18211638/UPHO.102766959.V550/Gemilang-Harvest-Makassar-Indonesia.jpg"
            alt=""
          />
          <span>Tamalanrea</span>
        </Item>
        <Item>
          <img
            src="https://imganuncios.mitula.net/rumah_dijual_di_tamalate_makassar_5750014646139605470.jpg"
            alt=""
          />
          <span>Tallo</span>
        </Item>
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
