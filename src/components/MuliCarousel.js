import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import CarouselItem from "./CarouselItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function MuliCarousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <Container>
      <Carousel {...settings}>
        <CarouselItem image="/carousel/1.jpg" />
        <CarouselItem image="/carousel/2.jpg" />
        <CarouselItem image="/carousel/3.jpg" />
        <CarouselItem image="/carousel/4.jpg" />
        <CarouselItem image="/carousel/5.jpg" />
        <CarouselItem image="/carousel/6.jpg" />
        <CarouselItem image="/carousel/7.jpg" />
        <CarouselItem image="/carousel/8.jpg" />
        <CarouselItem image="/carousel/9.jpg" />
        <CarouselItem image="/carousel/10.jpg" />
      </Carousel>
    </Container>
  );
}

export default MuliCarousel;

const Container = styled.div`
  padding: 2vh 3vw;
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
