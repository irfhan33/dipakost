import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

function RegisterOwner() {
  let navigate = useNavigate();

  const [fields, setFields] = useState({
    username: "",
    password: "",
    nomor_hp: "",
    email: "",
    profile: "",
  });

  function fieldHandler(e) {
    const name = e.target.getAttribute("name");
    setFields({
      ...fields,
      [name]: e.target.value,
    });
  }

  function registerHandler(e) {
    e.preventDefault();
    addDoc(collection(db, "pemilik_kost"), {
      username: fields.username,
      password: fields.password,
      nomor_hp: fields.nomor_hp,
      email: fields.email,
      profile: fields.profile,
    }).then(() => {
      alert("Pendaftaran Berhasil. Silahkan Login");
      navigate("/");
    });
  }
  return (
    <>
      <Navbar />
      <Container>
        <FormWrapper>
          <FormHeader>
            <Link to="/">
              <ArrowBackIcon className="icon-back" />
            </Link>
            <h1>Daftar Akun Pemilik Kost</h1>
          </FormHeader>
          <form action="" autoComplete="off" onSubmit={registerHandler}>
            <FormItem>
              <label htmlFor="nama">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={fieldHandler}
                placeholder="Masukkan Username Anda"
              />
            </FormItem>
            <FormItem>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={fieldHandler}
                placeholder="Masukkan Password Anda"
              />
            </FormItem>
            <FormItem>
              <label htmlFor="nomor_hp">Nomor HP</label>
              <input
                type="text"
                id="nomor_hp"
                onChange={fieldHandler}
                name="nomor_hp"
                placeholder="Masukkan Nomor HP Anda"
              />
            </FormItem>
            <FormItem>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onChange={fieldHandler}
                id="email"
                name="email"
                placeholder="Masukkan Email Anda"
              />
            </FormItem>
            <FormItem>
              <label htmlFor="profile">URL Profile</label>
              <input
                type="profile"
                onChange={fieldHandler}
                id="profile"
                name="profile"
                placeholder="Masukkan URL Profile Anda"
              />
            </FormItem>
            <FormItem>
              <button>Daftar</button>
            </FormItem>
          </form>
        </FormWrapper>
      </Container>
    </>
  );
}

export default RegisterOwner;

const Container = styled.div`
  min-height: calc(100vh - 60px);
  background-image: url("https://mamikos.com/assets/login/bg-registration-owner.svg");
  background-position: 100% 0;
  background-repeat: no-repeat;
  background-size: 80%;
`;

const FormWrapper = styled.div`
  max-width: 25%;
  padding-left: 100px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const FormHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 16px;

  .icon-back {
    cursor: pointer;
  }

  h1 {
    font-size: 24px;
    font-weight: 900;
    line-height: 32px;
    white-space: nowrap;
  }
`;
const FormItem = styled.div`
  input {
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

  label {
    display: inline-block;
    margin-bottom: 5px;
    font-weight: 700;
    margin-bottom: 16px;
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
