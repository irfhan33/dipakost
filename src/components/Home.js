import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import ImgCarousel from "./ImgCarousel";
import KostList from "./KostList";
import KostPopuler from "./KostPopuler";
import Navbar from "./Navbar";
function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <ImgCarousel />
        <KostList title="Kost Rekomendasi" />
        <KostList title="Harga Eksklusif" />
        <KostPopuler />
        <Footer />
      </Container>
    </>
  );
}

export default Home;

const Container = styled.div`
  overflow-x: hidden;
  min-height: 100vh;
`;
