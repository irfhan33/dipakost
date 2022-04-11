import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
function Navbar() {
  const [modal, setModal] = useState(false);
  const [modalstatus, setModalstatus] = useState("default");
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modal]);

  return (
    <>
      <Container>
        <Logo>dipakost</Logo>
        <NavMenu>
          <NavMenuItem>Sewakan Propertimu</NavMenuItem>
          <NavMenuItem>Area Populer</NavMenuItem>
          <NavMenuItem>Tentang Dipakost</NavMenuItem>
          <NavMenuItem>Syarat dan Ketentuan</NavMenuItem>
        </NavMenu>
        <Search>
          <span>Cari kost di daerah mana?</span>
          <SearchIcon className="icon_search" />
        </Search>
        <LoginButton onClick={() => setModal(true)}>MASUK</LoginButton>
      </Container>

      {modal && (
        <>
          <ModalClose
            onClick={() => {
              setModal(false);
              setModalstatus("default");
            }}
          ></ModalClose>
          <Modal>
            <ModalBackground>
              <ModalBox>
                {modalstatus === "default" ? (
                  <ModalDefault>
                    <h1>Masuk Ke Muli Kost</h1>
                    <p>saya ingin masuk sebagai</p>
                    <Card onClick={() => setModalstatus("loginuser")}>
                      <img
                        src="https://static-asset.mamikos.com/assets/bangul/illustrations/login-tenant.svg?version=2.11.0"
                        alt=""
                      />
                      <span>Pencari Kost</span>
                    </Card>
                    <Card onClick={() => setModalstatus("loginowner")}>
                      <img
                        src="https://static-asset.mamikos.com/assets/bangul/illustrations/login-owner.svg?version=2.11.0"
                        alt=""
                      />
                      <span>Pemilik Kost</span>
                    </Card>
                  </ModalDefault>
                ) : (
                  <ModalLogin>
                    <HeaderModal>
                      <ArrowBackIcon
                        className="icon-back"
                        onClick={() => setModalstatus("default")}
                      />
                      <h1>
                        {modalstatus === "loginowner"
                          ? "Login Pemilik Kost"
                          : "Login Pencari Kost"}
                      </h1>
                    </HeaderModal>

                    <form action="">
                      <label htmlFor="username">Username</label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Masukkan Username"
                        autoComplete="false"
                      />

                      <label htmlFor="password">Password</label>
                      <input
                        type="text"
                        id="password"
                        name="password"
                        placeholder="Masukkan Password"
                        autoComplete="false"
                      />

                      <button>Login</button>
                      <p>
                        Belum punya akun MuliKost? <span>Daftar Sekarang</span>
                      </p>
                    </form>
                  </ModalLogin>
                )}
              </ModalBox>
            </ModalBackground>
          </Modal>
        </>
      )}
    </>
  );
}

export default Navbar;

const Container = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 0 3vw;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Logo = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: #00b1ac;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;
const NavMenuItem = styled.div`
  display: flex;
  cursor: pointer;
  font-size: 14px;
  color: #222222;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    height: 1.5px;
    background-color: lightgray;
    right: 0;
    left: 0;
    bottom: -8px;
    transform: scaleX(0);
    transform-origin: left center;
    transition: all 300ms;
    opacity: 0;
  }

  &:hover {
    &:after {
      opacity: 1;
      transform: scaleX(1);
    }
  }
`;

const Search = styled.div`
  margin-left: auto;
  display: flex;
  height: 34px;
  align-items: center;
  padding: 0 18px;
  padding-right: 10px;
  border-radius: 4px;
  border-bottom: 1px solid #00b1ac;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  width: 270px;
  transition: all 250ms;

  @media (max-width: 768px) {
    padding: 0 4px;
  }

  span {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .icon_search {
    margin-left: auto;
    color: #00b1ac;
  }

  &:hover {
    width: 300px;
    transition: all 250ms;

    .icon_search {
      margin-left: auto;
    }
  }
`;

const LoginButton = styled.div`
  color: #00b1ac;
  border: 1px solid #00b1ac;
  height: 34px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  transition: all 250ms;
  cursor: pointer;

  &:hover {
    background: #00b1ac;
    color: white;
  }
`;

const Modal = styled.div``;

const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  background: red;
`;

const ModalBox = styled.div`
  background: white;
  border-radius: 10px;
  padding: 30px 40px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  max-width: 600px;
  width: 100%;
  z-index: 10;
  position: fixed;
  margin: 0 auto;
  h1 {
    font-size: 24px;
    color: #383746;
    margin-bottom: 24px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: #383746;
  }
`;

const Card = styled.div`
  border-radius: 4px;
  box-shadow: 0 -1px 4px rgb(0 0 0 / 4%), 0 4px 8px rgb(0 0 0 / 8%);
  cursor: pointer;
  padding: 16px;
  height: 70px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  width: auto;

  span {
    font-size: 12px;
    font-weight: 700;
    line-height: 24px;
  }

  img {
    height: 100%;
  }
`;

const ModalClose = styled.div`
  position: fixed;
  z-index: 9;
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
`;

const ModalDefault = styled.div``;

const ModalLogin = styled.div`
  .icon-back {
    cursor: pointer;
  }

  h1 {
    color: #2e2d39;
    font-size: 18px;
    font-weight: 700;
    display: block;
    margin: 0;
  }

  p {
    color: #383746;
    font-size: 10px;
    line-height: 1.75;
    margin-top: 5px;

    span {
      cursor: pointer;
      color: #1baa56;
      font-weight: bold;
    }
  }
  form {
    label {
      font-size: 12px;
      line-height: 1.75;
      color: #383746;
      margin-bottom: 4px;
      display: block;
    }
    input {
      display: flex;
      border: none;
      border-bottom: 1.5px solid lightgray;
      width: 100%;
      padding-bottom: 8px;
      font-size: 12px;
      margin-bottom: 10px;
      transition: all 250ms;

      &:focus {
        border-bottom: 1.5px solid green;
        outline: none;
      }
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
    }
  }
`;

const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;
