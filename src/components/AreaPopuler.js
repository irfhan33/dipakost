import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { db } from "../firebaseConfig";
import KostItem from "./KostItem";
import Navbar from "./Navbar";
const AreaPopuler = () => {
  const { area } = useParams();
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

  const kost = kosts.filter((kost) => {
    return kost.area == area;
  });

  console.log(kost);

  return (
    <>
      <Navbar />
      <Container>
        <ViewallHeader area={area} />
        <ListContainer>
          {kost.map((kost) => (
            <KostItem
              key={kost.id}
              image={kost.gambar1}
              detailAdress={kost.nama_kost}
              highlightAdress={kost.area}
              price={kost.harga}
            />
          ))}
        </ListContainer>
        {!kost.length && <h1>Data {area} tidak ditemukan</h1>}
      </Container>
    </>
  );
};

export default AreaPopuler;

const ViewallHeader = ({ area }) => {
  return (
    <Header>
      <h1>Hasil Pencarian {area}</h1>
    </Header>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 3vw;
  background-color: #fafafa;
  min-height: 100vh;
`;

const Header = styled.div`
  background: linear-gradient(63.39deg, #14a01d 24.71%, #6dcf73 94.69%);
  box-shadow: 0 16px 32px rgb(98 197 105 / 15%);
  height: 278px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    margin-left: 20px;
  }
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;
