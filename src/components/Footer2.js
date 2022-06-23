import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer2 = () => {
  return (
    <Container>
      <Location>
        <div className="footer">
          <ul className="menu">
            <li>
              <Link to="/area-populer-all">Area Populer</Link>
            </li>
            <li>
              <Link to="/tentang">Tentang Muli Kost</Link>
            </li>

            <li>
              <Link to="/syarat-dan-ketentuan">Syarat dan Ketentuan</Link>
            </li>
          </ul>
          <ul className="menu">
            <li>
              <Link to="/area-populer-all">Kontak Kami</Link>
            </li>
            <li>mulikost@gmail.com</li>

            <li>
              <a href="https://wa.me/+6281248636243/">+62 812-4863-6243</a>
            </li>
          </ul>
          <WrapperLocation>
            <h3>Lokasi Kami</h3>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15895.256251139697!2d119.5106794!3d-5.1336247!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x646a7c51c0dd98ae!2sKost%20Mulia%20Raya!5e0!3m2!1sid!2sid!4v1655875109612!5m2!1sid!2sid"
              loading="lazy"
            ></iframe>
          </WrapperLocation>
        </div>
      </Location>
    </Container>
  );
};

export default Footer2;

const Container = styled.div`
  margin-top: 20px;
  padding: 20px 3vw;
`;

const Location = styled.div`
  margin: 30px 0;
  padding: 30px 0;
  border-top: 1px solid lightgray;
  h3 {
    font-size: 24px;
    margin-bottom: 16px;
    color: #00b1ac;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  .footer {
    display: flex;
    gap: 300px;
  }

  .menu {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    li {
      color: #00b1ac;
      font-weight: bold;
      margin-bottom: 30px;
      white-space: nowrap;
    }
  }
`;
const WrapperLocation = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  iframe {
    width: 100%;
    min-height: 200px;
    border: none;
  }
`;
