import React from "react";
import styled from "styled-components";
import MapsHomeWorkRoundedIcon from "@mui/icons-material/MapsHomeWorkRounded";
import MeetingRoomRoundedIcon from "@mui/icons-material/MeetingRoomRounded";
import { Avatar } from "@mui/material";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <SidebarContainer>
      {/* Profile */}
      <Profile>
        <Avatar></Avatar>
        <InfoProfile>
          <span>Muli</span>
          <p>Pemilik Kost</p>
        </InfoProfile>
      </Profile>

      {/* Nav List */}
      <ul>
        <Link to="/dashboard">
          <NavItem
            Icon={MapsHomeWorkRoundedIcon}
            title="Kelola Data Kost"
            active
          />
        </Link>
        <Link to="/">
          <NavItem Icon={MeetingRoomRoundedIcon} title="Logout" />
        </Link>
      </ul>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  padding: 20px 20px;
  border-right: 1px dashed rgba(145, 158, 171, 0.24);
  min-width: 240px;
  max-width: 240px;
  min-height: 100vh;
  ul {
    padding: 0;
    margin-top: 30px;
  }
`;

const Profile = styled.div`
  background-color: rgba(145, 158, 171, 0.12);
  padding: 16px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const InfoProfile = styled.div`
  span {
    font-weight: 600;
    line-height: 1.57143;
    font-size: 0.875rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  p {
    line-height: 1.57143;
    font-size: 0.875rem;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: rgb(99, 115, 129);
  }
`;
