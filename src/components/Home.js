import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebaseConfig";
import Footer from "./Footer";
import ImgCarousel from "./ImgCarousel";
import KostList from "./KostList";
import KostPopuler from "./KostPopuler";
import Navbar from "./Navbar";
function Home() {
  const [kosts, setKosts] = useState([]);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "kost"), orderBy("nama_kost", "asc")),
      (snapshot) => {
        setKosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      }
    );
  }, []);

  const rekomendasi = kosts.filter((kost) => {
    return kost.kategori == "rekomendasi";
  });

  const eksklusif = kosts.filter((kost) => {
    return kost.kategori == "eksklusif";
  });

  return (
    <>
      <Navbar />
      <Container>
        <ImgCarousel />
        <KostList
          title="Kost Rekomendasi"
          kosts={rekomendasi}
          type="rekomendasi"
        />
        <KostList title="Harga Eksklusif" kosts={eksklusif} type="eksklusif" />
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
