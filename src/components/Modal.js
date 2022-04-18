import React from "react";
import styled from "styled-components";

function Modal({ children }) {
  return (
    <Container>
      <ModalBackground>
        <ModalBox>{children}</ModalBox>
      </ModalBackground>
    </Container>
  );
}

export default Modal;
const Container = styled.div``;

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
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #383746;
  }
`;
