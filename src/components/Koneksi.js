import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React from "react";
import styled from "styled-components";
import { db } from "../firebaseConfig";
function Koneksi() {
  const koneksi = () => {
    if (db._app.options.projectId !== "dipa-kost") {
      alert("Koneksi Gagal");
    } else {
      alert("Koneksi Berhasil");
    }
  };
  return (
    <Container>
      <button onClick={koneksi}>Check Connection</button>
    </Container>
  );
}

export default Koneksi;

const Container = styled.div`
  background: lightgray;
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`;
