import React from "react";
import styled from "styled-components";

function KostItem({ image, detailAdress, highlightAdress, price }) {
  return (
    <Container>
      <CardImg>
        <img src={image} alt="" />
      </CardImg>
      <DetailAdress>{detailAdress}</DetailAdress>
      <HighlightAdress>{highlightAdress}</HighlightAdress>
      <Price>
        <span>IDR {price} </span> / bulan
      </Price>
    </Container>
  );
}

export default KostItem;

const Container = styled.div`
  margin: 10px 10px;
  cursor: pointer;
  transition: all 250ms;
  &:hover {
    transform: scale(1.1);
  }
`;

const CardImg = styled.div`
  height: 190px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    object-fit: cover;
  }
`;

const DetailAdress = styled.p`
  font-size: 14px;
  margin-top: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const HighlightAdress = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const Price = styled.div`
  font-size: 16px;

  span {
    color: #00b1ac;
    font-weight: 600;
  }
`;
