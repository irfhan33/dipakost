import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./../firebaseConfig";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function EditData() {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [fields, setFields] = useState({
    nama_kost: "",
    lokasi_gmaps: "",
    harga: "",
    alamat: "",
    type: "",
    keterangan: "",
    gambar1: "",
    gambar2: "",
    gambar3: "",
    kategori: "",
    area: "",
  });

  useEffect(() => {
    getDoc(doc(db, "kost", id)).then((doc) => {
      const data = doc.data();
      setFields({
        nama_kost: data.nama_kost,
        lokasi_gmaps: data.lokasi_gmaps,
        harga: data.harga,
        alamat: data.alamat,
        type: data.type,
        keterangan: data.keterangan,
        gambar1: data.gambar1,
        gambar2: data.gambar2,
        gambar3: data.gambar3,
        kategori: data.kategori,
        area: data.area,
      });
    });
  }, []);

  function fieldHandler(e) {
    const name = e.target.getAttribute("name");
    setFields({
      ...fields,
      [name]: e.target.value,
    });
  }

  function editdataHandler(e) {
    e.preventDefault();

    updateDoc(doc(db, "kost", id), {
      nama_kost: fields.nama_kost,
      lokasi_gmaps: fields.lokasi_gmaps,
      harga: fields.harga,
      alamat: fields.alamat,
      type: fields.type,
      keterangan: fields.keterangan,
      gambar1: fields.gambar1,
      gambar2: fields.gambar2,
      gambar3: fields.gambar3,
      kategori: fields.kategori,
      area: fields.area,
    }).then(() => {
      Swal.fire({
        icon: "success",
        title: "Edit Data Berhasil",
        showConfirmButton: false,
      });
      navigate("/dashboard");
    });
  }

  return (
    <Container>
      <Sidebar />
      <Content>
        <h1>Edit Data</h1>
        <FormContainer>
          <form action="" autoComplete="off" onSubmit={editdataHandler}>
            <FormItem>
              <label htmlFor="nama_kost">Nama Kost</label>
              <input
                type="text"
                id="nama_kost"
                name="nama_kost"
                placeholder="Masukkan Nama Kost"
                onChange={fieldHandler}
                value={fields.nama_kost}
              />
            </FormItem>
            <FormItem>
              <label htmlFor="lokasi_gmaps">Lokasi Google Maps</label>
              <input
                type="text"
                id="lokasi_gmaps"
                name="lokasi_gmaps"
                onChange={fieldHandler}
                value={fields.lokasi_gmaps}
                placeholder="Masukkan Lokasi Google Maps"
              />
            </FormItem>
            <FormItem>
              <label htmlFor="harga">Harga</label>
              <input
                type="text"
                id="harga"
                name="harga"
                onChange={fieldHandler}
                placeholder="Masukkan Harga Kost"
                value={fields.harga}
              />
            </FormItem>
            <FormItem>
              <label htmlFor="alamat">Alamat</label>
              <input
                type="text"
                id="alamat"
                name="alamat"
                value={fields.alamat}
                onChange={fieldHandler}
                placeholder="Masukkan Alamat Kost"
              />
            </FormItem>
            <FormItem>
              <label htmlFor="type">Type</label>
              <input
                type="text"
                id="type"
                name="type"
                value={fields.type}
                onChange={fieldHandler}
                placeholder="Masukkan Type"
              />
            </FormItem>
            <FormItem>
              <label htmlFor="keterangan">Keterangan</label>
              <input
                type="text"
                id="keterangan"
                name="keterangan"
                value={fields.keterangan}
                onChange={fieldHandler}
                placeholder="Masukkan Keterangan Kost"
              />
            </FormItem>
            <FormItem>
              <label htmlFor="gambar1">URL Gambar 1</label>
              <input
                type="text"
                id="gambar1"
                name="gambar1"
                onChange={fieldHandler}
                value={fields.gambar1}
                placeholder="Masukkan URL Gambar 1"
              />
            </FormItem>
            <FormItem>
              <label htmlFor="gambar2">URL Gambar 2</label>
              <input
                type="text"
                id="gambar2"
                onChange={fieldHandler}
                value={fields.gambar2}
                name="gambar2"
                placeholder="Masukkan URL Gambar 2"
              />
            </FormItem>
            <FormItem>
              <label htmlFor="gambar3">URL Gambar 3</label>
              <input
                type="text"
                id="gambar3"
                value={fields.gambar3}
                name="gambar3"
                onChange={fieldHandler}
                placeholder="Masukkan URL Gambar 3"
              />
            </FormItem>
            <FormItem>
              <label htmlFor="kategori">Kategori</label>
              <input
                type="text"
                id="kategori"
                value={fields.kategori}
                name="kategori"
                onChange={fieldHandler}
                placeholder="Masukkan Kategori Kost"
              />
            </FormItem>
            <FormItem>
              <label htmlFor="area">Area</label>
              <input
                type="text"
                id="area"
                value={fields.area}
                name="area"
                onChange={fieldHandler}
                placeholder="Masukkan Area Kost"
              />
            </FormItem>
            {/* <h3>Fasilitas</h3>
            <FormItemCb>
              <label htmlFor="kasur">Kasur</label>
              <input
                type="checkbox"
                id="kasur"
                name="kasur"
                onChange={cbHandler}
              />
            </FormItemCb> */}

            {/* Button */}
            <FormItem>
              <button>Edit Data</button>
            </FormItem>
          </form>
        </FormContainer>
      </Content>
    </Container>
  );
}

export default EditData;

const Container = styled.div`
  display: flex;
`;
const Content = styled.div`
  flex: 1;
  padding: 20px;

  h1 {
    font-weight: 700;
    line-height: 1.5;
    font-size: 1.5rem;
  }
`;

const FormContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgb(145 158 171 / 20%) 0px 0px 2px 0px,
    rgb(145 158 171 / 12%) 0px 12px 24px -4px;

  h3 {
    display: block;
    margin-bottom: 26px;
    color: #1baa56;
  }
`;
const FormItem = styled.div`
  input[type="text"] {
    display: flex;
    height: 46px;
    border: 1px solid lightgray;
    outline: none;
    width: 100%;
    border-radius: 4px;
    padding: 0 10px;
    margin-bottom: 16px;
    &:focus {
      border: 1px solid #1baa56;
    }
  }

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    &:focus {
      border: 1px solid #1baa56;
    }
  }

  label {
    display: inline-block;
    margin-bottom: 5px;
    font-weight: 700;
  }

  button {
    width: 100%;
    padding: 10px 0;
    border: none;
    border-radius: 4px;
    background-color: #1baa56;
    border-color: #18944b;
    color: #fff;
    cursor: pointer;
    height: 46px;
    font-weight: bold;
  }
`;

const FormItemCb = styled(FormItem)`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  label {
    margin-bottom: 0px;
    margin-right: 10px;
  }
`;
