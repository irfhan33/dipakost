import React, { useRef } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import KostItem from "./KostItem";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
function KostList({ title, kosts }) {
  console.log(kosts);
  const carouselRef = useRef(null);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
  };

  const next = () => {
    carouselRef.current.slickNext();
  };

  const prev = () => {
    carouselRef.current.slickPrev();
  };
  return (
    <Container>
      <Header>
        <Title>{title}</Title>

        <Right>
          <ButtonAll>Lihat Semua</ButtonAll>
          <Line />
          <ArrowSlider>
            <Back onClick={prev}>
              <ArrowBackIosRoundedIcon className="arrow_icon" />
            </Back>
            <Next onClick={next}>
              <ArrowForwardIosRoundedIcon className="arrow_icon" />
            </Next>
          </ArrowSlider>
        </Right>
      </Header>
      <Carousel ref={carouselRef} {...settings}>
        {kosts.map((kost) => (
          <KostItem
            key={kost.id}
            image={kost.gambar1}
            detailAdress={kost.nama_kost}
            highlightAdress={kost.area}
            price={kost.harga}
          />
        ))}
      </Carousel>
    </Container>
  );
}

export default KostList;

const Container = styled.div`
  padding: 20px 3vw;
  background-color: #fafafa;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #00b1ac;
`;

const Carousel = styled(Slider)`
  margin: 0 -10px;

  .slick-list {
    overflow: visible;
  }

  button {
    opacity: 0;
    height: 100%;
    z-index: 99;
    transition: opacity 0.2s ease 0s;
    width: 3vw;
    /* background: red; */
  }

  &:hover {
    button {
      opacity: 1;
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonAll = styled.div`
  font-size: 14px;
  border: 1px solid lightgray;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 14px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
`;

const ArrowSlider = styled.div`
  display: flex;
  gap: 10px;
  .arrow_icon {
    color: rgba(0, 0, 0, 0.8);
  }
`;

const Back = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 -1px 4px rgb(0 0 0 / 4%), 0 4px 8px rgb(0 0 0 / 8%);
`;
const Next = styled(Back)``;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Line = styled.div`
  background-color: #dadada;
  display: block;
  height: 24px;
  width: 1px;
`;
