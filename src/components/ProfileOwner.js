import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./../firebaseConfig";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectUserName,
  selectUserRole,
  setUserLogout,
} from "../features/user/userSlice";
import MapsHomeWorkRoundedIcon from "@mui/icons-material/MapsHomeWorkRounded";
import MeetingRoomRoundedIcon from "@mui/icons-material/MeetingRoomRounded";
import { Avatar } from "@mui/material";
import NavItem from "./NavItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Swal from "sweetalert2";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useDispatch } from "react-redux";

function ProfileOwner() {
  const { username } = useParams();
  const role = useSelector(selectUserRole);

  const [data, setData] = useState([]);
  let navigate = useNavigate();
  const [id, setId] = useState("");
  const [fields, setFields] = useState({
    nama: "",
    username: "",
    password: "",
    nomor_hp: "",
    email: "",
    profile: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    getDocs(
      query(collection(db, "pemilik_kost"), where("username", "==", username))
    )
      .then((snapshot) => {
        setId(snapshot.docs[0].id);
        snapshot.docs.map((doc) => {
          const datas = doc.data();
          setFields({
            username: datas.username,
            password: datas.password,
            nomor_hp: datas.nomor_hp,
            email: datas.email,
            profile: datas.profile,
          });
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [expand, setExpand] = useState(true);
  const user = useSelector(selectUserName);

  function fieldHandler(e) {
    const name = e.target.getAttribute("name");
    setFields({
      ...fields,
      [name]: e.target.value,
    });
  }

  const updateProfile = (e) => {
    e.preventDefault();

    updateDoc(doc(db, "pemilik_kost", id), {
      username: fields.username,
      password: fields.password,
      nomor_hp: fields.nomor_hp,
      email: fields.email,
      profile: fields.profile,
    }).then(() => {
      Swal.fire({
        icon: "success",
        title: "Edit Data Berhasil",
        showConfirmButton: false,
      });
      navigate("/");
    });
  };

  const Logout = () => {
    dispatch(setUserLogout());
    navigate("/");
  };
  return (
    <>
      <Container>
        <SidebarContainer>
          {/* Profile */}
          <Profile>
            <Avatar></Avatar>
            {expand && (
              <InfoProfile>
                <span>{user}</span>
                <p>{role}</p>
              </InfoProfile>
            )}
          </Profile>

          {/* Nav List */}
          <ul>
            <Link to="/dashboard">
              <NavItem
                Icon={MapsHomeWorkRoundedIcon}
                title="Dashboard"
                expand={expand}
              />
            </Link>
            <Link to="/pesanan-owner">
              <NavItem
                Icon={BookmarkBorderIcon}
                title="Data pesanan"
                expand={expand}
              />
            </Link>
            <Link to={`/profile/` + user}>
              <NavItem
                Icon={AccountCircleIcon}
                title="Profile"
                expand={expand}
                active
              />
            </Link>
            <Link to="/">
              <NavItem
                Icon={MeetingRoomRoundedIcon}
                title="Logout"
                expand={expand}
                onClick={Logout}
              />
            </Link>
          </ul>

          <ToggleExpand onClick={() => setExpand(!expand)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="rgb(0, 171, 85)"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </ToggleExpand>
        </SidebarContainer>
        <Content>
          <ContentHeader>
            <h1>Profile</h1>
            <Link to="/tambah-data"></Link>
          </ContentHeader>
          <form action="" onSubmit={updateProfile}>
            <FormItem>
              <label htmlFor="nama">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={fieldHandler}
                placeholder="Masukkan Username Anda"
                value={fields.username}
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
                value={fields.password}
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
                value={fields.nomor_hp}
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
                value={fields.email}
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
                value={fields.profile}
              />
            </FormItem>
            <FormItem>
              <button>Update</button>
            </FormItem>
          </form>
        </Content>
      </Container>
    </>
  );
}

export default ProfileOwner;

const Container = styled.div`
  display: flex;
  height: 100%;
  min-height: 100vh;
`;

const Content = styled.div`
  padding: 20px;
  width: 100%;
  h1 {
    font-weight: 700;
    line-height: 1.5;
    font-size: 1.5rem;
  }
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: green;
  margin-bottom: 30px;
`;

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

export const ModalClose = styled.div`
  position: fixed;
  z-index: 9;
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
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
