import React from "react";
import styled from "styled-components";

function Dashboard() {
  return (
    <Container>
      <Sidebar>
        <Profile>
          <Avatar></Avatar>
          <InfoProfile>
            <span>Muli</span>
            <p>Pemilik Kost</p>
          </InfoProfile>
        </Profile>
      </Sidebar>
      <Content>Content</Content>
    </Container>
  );
}

export default Dashboard;

const Container = styled.div`
  display: flex;
  background: lightgray;
  height: 100%;
  min-height: 100vh;
`;
const Sidebar = styled.div`
  background: lightblue;
  padding: 30px 20px;
  border-right: 1px solid lightgray;
`;
const Content = styled.div`
  background: lightgreen;
  flex: 1;
`;

const Profile = styled.div``;
