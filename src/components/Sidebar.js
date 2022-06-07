import React, { useState } from "react";
import styled from "styled-components";
import MapsHomeWorkRoundedIcon from "@mui/icons-material/MapsHomeWorkRounded";
import MeetingRoomRoundedIcon from "@mui/icons-material/MeetingRoomRounded";
import { Avatar } from "@mui/material";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserName } from "../features/user/userSlice";
function Sidebar() {
  const user = useSelector(selectUserName);
  const [expand, setExpand] = useState(true);
  return (
    <SidebarContainer>
      {/* Profile */}
      <Profile>
        <Avatar></Avatar>
        {expand && (
          <InfoProfile>
            <span>{user}</span>
            <p>Pemilik Kost</p>
          </InfoProfile>
        )}
      </Profile>

      {/* Nav List */}
      <ul>
        <Link to="/dashboard">
          <NavItem
            Icon={MapsHomeWorkRoundedIcon}
            title="Kelola Data Kost"
            active
            expand={expand}
          />
        </Link>
        <Link to="/">
          <NavItem
            Icon={MeetingRoomRoundedIcon}
            title="Logout"
            expand={expand}
          />
        </Link>
      </ul>

      <ToggleExpand onClick={() => setExpand(!expand)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="rgb(0, 171, 85)"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </ToggleExpand>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  padding: 20px 20px;
  border-right: 1px dashed rgba(145, 158, 171, 0.24);
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

const ToggleExpand = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgba(0, 171, 85, 0.08);
  margin-inline: auto;
  margin-top: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 171, 85, 0.2);
  }
  svg {
    width: 28px;
  }
`;
