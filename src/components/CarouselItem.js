import React from "react";
import styled from "styled-components";

function CarouselItem({ image }) {
  return (
    <Container>
      <img src={image} alt="" />
    </Container>
  );
}

export default CarouselItem;

const Container = styled.div`
  margin: 0 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
    object-fit: contain;
  }
`;
