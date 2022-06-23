import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db } from "./../firebaseConfig";
import { storage } from "./../firebaseConfig";
import AddIcon from "@mui/icons-material/Add";
import Sidebar from "./Sidebar";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";
import { selectUserName, setUserLogout } from "../features/user/userSlice";
import MapsHomeWorkRoundedIcon from "@mui/icons-material/MapsHomeWorkRounded";
import MeetingRoomRoundedIcon from "@mui/icons-material/MeetingRoomRounded";
import { Avatar } from "@mui/material";
import Modal from "./Modal";
import NavItem from "./NavItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useDispatch } from "react-redux";

function PesananOwner() {
  const [expand, setExpand] = useState(true);
  const [pesanan, setPesanan] = useState([]);
  const [modal, setModal] = useState(false);
  const user = useSelector(selectUserName);
  const [idBayar, setIdbayar] = useState("");
  const [buktiTransfer, setbuktiTransfer] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onSnapshot(
      query(collection(db, "pesanan"), orderBy("nama_kost", "asc")),
      (snapshot) => {
        setPesanan(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      }
    );
  }, []);

  const deleteData = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        deleteDoc(doc(db, "kost", id));
      }
    });
  };

  const uploadBukti = () => {
    updateDoc(doc(db, "pesanan", idBayar), {
      statusbayar: 3,
    }).then(() => {
      Swal.fire({
        icon: "success",
        title: "Konfirmasi Pembayaran Sukses",
        showConfirmButton: false,
      });
    });

    setModal(false);
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
                <p>Pemilik Kost</p>
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
                active
                expand={expand}
              />
            </Link>
            <Link to={`/profile-owner/` + user}>
              <NavItem
                Icon={AccountCircleIcon}
                title="Profile"
                expand={expand}
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
            <h1>Data Pesanan</h1>
          </ContentHeader>

          <TableWrapper>
            <table cellSpacing="0" cellPadding="0">
              <thead>
                <tr>
                  <th>Nama Penhuni</th>
                  <th>Nama Kost</th>
                  <th>Harga</th>
                  <th>Alamat</th>
                  <th>Type</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {pesanan.map((pesanan) => (
                  <tr key={pesanan.id}>
                    <td>
                      <p>{pesanan.user}</p>
                    </td>
                    <td>
                      <p>{pesanan.nama_kost}</p>
                    </td>
                    <td>
                      <p>{pesanan.harga}</p>
                    </td>
                    <td>
                      <p>{pesanan.alamat}</p>
                    </td>
                    <td>
                      <p>{pesanan.type}</p>
                    </td>
                    <td>
                      {pesanan.statusbayar === 1 ? (
                        <>
                          <RedButton>Belum Dibayar</RedButton>
                        </>
                      ) : pesanan.statusbayar === 2 ? (
                        <>
                          <BlueButton>Menunggu Konfirmasi</BlueButton>
                          <InfoButton
                            onClick={() => {
                              setModal(true);
                              setbuktiTransfer(pesanan.bukti);
                              setIdbayar(pesanan.id);
                            }}
                          >
                            Lihat Bukti Transfer
                          </InfoButton>
                        </>
                      ) : (
                        <GreenButton>Sudah dibayar</GreenButton>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrapper>
        </Content>
      </Container>
      {modal && (
        <>
          <ModalClose
            onClick={() => {
              setModal(false);
            }}
          ></ModalClose>
          <Modal>
            <h1>Upload Bukti Transaksi</h1>
            <BuktiTransfer src={buktiTransfer} alt="" />
            <GreenButton onClick={uploadBukti}>
              Konfirmasi Pembayaran
            </GreenButton>
          </Modal>
        </>
      )}
    </>
  );
}

export default PesananOwner;

const InfoButton = styled.div`
  color: green;
  font-weight: semibold;

  &:hover {
    font-weight: bold;
  }
`;

const BuktiTransfer = styled.img`
  width: 100%;
`;

const RedButton = styled.div`
  background: coral;
  width: fit-content;
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
`;
const BlueButton = styled(RedButton)`
  background: skyblue;
  cursor: pointer;
`;
const GreenButton = styled(RedButton)`
  background: #00ab55;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  min-height: 100vh;
`;

const TableWrapper = styled.div`
  margin-top: 30px;
`;
const Content = styled.div`
  padding: 20px;

  h1 {
    font-weight: 700;
    line-height: 1.5;
    font-size: 1.5rem;
  }

  table {
    table-layout: fixed;
    width: 100%;
    overflow: hidden;
    margin: 0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgb(145 158 171 / 20%) 0px 0px 2px 0px,
      rgb(145 158 171 / 12%) 0px 12px 24px -4px;

    thead {
      background-color: rgb(244, 246, 248);
      border-radius: 10px;
    }

    th {
      color: rgb(99, 115, 129);
      line-height: 1.5rem;
      font-size: 0.875rem;
      padding: 16px 16px;
      text-align: left;
      white-space: nowrap;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1; /* number of lines to show */
      line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    td {
      padding: 16px 16px;
      line-height: 1.57143;
      font-size: 0.875rem;
      color: rgb(33, 43, 54);

      p {
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* number of lines to show */
        line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .delete-icon {
        color: red;
        margin: 0 auto;
        display: block;
        cursor: pointer;
      }
      .edit-icon {
        color: gray;
        margin: 0 auto;
        display: block;
        cursor: pointer;
      }
    }
  }
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ButtonTambahData = styled.div`
  color: #fff;
  background-color: #00ab55;
  box-shadow: 0 8px 16px 0 rgb(0 171 85 / 24%);
  min-width: 64px;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: bold;
  align-items: center;
  display: flex;
  cursor: pointer;
  transition: all 250ms;

  &:hover {
    background-color: #007b55;
  }

  span {
    margin-left: 4px;
  }
`;

const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
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
