import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import CarouselItem from "./CarouselItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ImgCarousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
  };
  return (
    <Container>
      <Carousel {...settings}>
        <CarouselItem image="https://static.mamikos.com/uploads/cache/data/event/2022-03-07/62mWsyJ1-540x720.jpg" />
        <CarouselItem image="https://static.mamikos.com/uploads/cache/data/event/2022-03-07/NANitHsd-540x720.jpg" />
        <CarouselItem image="https://static.mamikos.com/uploads/cache/data/event/2022-03-07/arHn5Yvb-540x720.jpg" />
        <CarouselItem image="https://static.mamikos.com/uploads/cache/data/event/2021-07-26/TzRQ3hwe-540x720.jpg" />
      </Carousel>
    </Container>
  );
}

export default ImgCarousel;

const Container = styled.div`
  padding: 2vh 3vw;
  padding-bottom: 50px;
`;

const Carousel = styled(Slider)`
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
