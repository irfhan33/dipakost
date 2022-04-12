import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <Navbar />
      <Container>
        <FormWrapper>
          <FormHeader>
            <Link to="/">
              <ArrowBackIcon className="icon-back" />
            </Link>
            <h1>Daftar Akun Pencari Kost</h1>
          </FormHeader>
          <FormItem>
            <label htmlFor="nama">Nama Lengkap</label>
            <input
              type="text"
              id="nama"
              nane="nama"
              placeholder="Masukkan Nama Lengkap Anda"
            />
          </FormItem>
          <FormItem>
            <label htmlFor="nama">Username</label>
            <input
              type="text"
              id="username"
              nane="username"
              placeholder="Masukkan Username Anda"
            />
          </FormItem>
          <FormItem>
            <label htmlFor="nama">Password</label>
            <input
              type="password"
              id="password"
              nane="password"
              placeholder="Masukkan Password Anda"
            />
          </FormItem>
          <FormItem>
            <label htmlFor="nama">Nomor HP</label>
            <input
              type="password"
              id="password"
              nane="password"
              placeholder="Masukkan Nomor HP Anda"
            />
            <FormItem>
              <label htmlFor="nama">Email</label>
              <input
                type="email"
                id="email"
                nane="email"
                placeholder="Masukkan Email Anda"
              />
            </FormItem>
            <FormItem>
              <label htmlFor="nama">Profile</label>
              <input
                type="profile"
                id="profile"
                nane="profile"
                placeholder="Masukkan Profile Anda"
              />
            </FormItem>
          </FormItem>
          <FormItem>
            <button>Daftar</button>
          </FormItem>
        </FormWrapper>
      </Container>
    </>
  );
}

export default Register;

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
