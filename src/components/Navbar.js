import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <Container>
      <Logo>dipakost</Logo>
      <NavMenu>
        <NavMenuItem>Sewakan Propertimu</NavMenuItem>
        <NavMenuItem>Area Populer</NavMenuItem>
        <NavMenuItem>Tentang Dipakost</NavMenuItem>
        <NavMenuItem>Syarat dan Ketentuan</NavMenuItem>
      </NavMenu>
      <Search>
        <span>Mau ngekost di daerah mana?</span>
        <SearchIcon className="icon_search" />
      </Search>
      <LoginButton>MASUK</LoginButton>
    </Container>
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
