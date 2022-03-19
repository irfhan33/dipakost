import React from "react";
import styled from "styled-components";
import ImgCarousel from "./ImgCarousel";
import KostList from "./KostList";
import KostPopuler from "./KostPopuler";
import Navbar from "./Navbar";
function Home() {
  return (
    <Container>
      <Navbar />
      <ImgCarousel />
      <KostList title="Kost Rekomendasi" />
      <KostList title="Kost di bawah Rp 2 juta" />
      <KostPopuler />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  overflow-x: hidden;
  min-height: 100vh;
`;
