import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import CarouselItem from "./CarouselItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
function ImgCarousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
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
        <Link to="/detail/XfVDyujS0KFUbBjTZgro">
          <CarouselItem image="/muli1.jpg" />
        </Link>
        <Link to="/detail/OX3LBUWIBJDyJmrtlONQ">
          <CarouselItem image="/muli2.jpg" />
        </Link>
        <Link to="/detail/0U8dhBBylsaSWlAoAxsX">
          <CarouselItem image="/muli3.jpg" />
        </Link>
        <Link to="/detail/kgXrghPfwqhpGd3i5Wxo">
          <CarouselItem image="/muli4.jpg" />
        </Link>
      </Carousel>
    </Container>
  );
}

export default ImgCarousel;

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
