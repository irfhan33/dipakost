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
import { useDispatch } from "react-redux";

function PesananSaya() {
  const [expand, setExpand] = useState(true);
  const [pesanan, setPesanan] = useState([]);
  const [modal, setModal] = useState(false);
  const user = useSelector(selectUserName);
  const [idBayar, setIdbayar] = useState("");
  const [imageUpload, setImageUpload] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();

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

  const filteredPesanan = pesanan.filter((pesanan) => {
    return pesanan.user == user;
  });

  const uploadBukti = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      getDownloadURL(imageRef)
        .then((url) => {
          console.log(url);
          updateDoc(doc(db, "pesanan", idBayar), {
            bukti: url,
            statusbayar: 2,
          }).then(() => {
            Swal.fire({
              icon: "success",
              title: "Upload Bukti Pembayaran Berhasil",
              showConfirmButton: false,
            });
          });
        })
        .catch((error) => {
          console.log(error.message, "error getting the image url");
        })
        .catch((error) => {
          console.log(error.message);
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
            <Link to="/pesanan">
              <NavItem
                Icon={MapsHomeWorkRoundedIcon}
                title="Data pesanan"
                active
                expand={expand}
              />
            </Link>
            <Link to={`/profile/` + user}>
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
            <h1>Pesanan {user}</h1>
          </ContentHeader>

          <TableWrapper>
            <table cellSpacing="0" cellPadding="0">
              <thead>
                <tr>
                  <th>Nama Kost</th>
                  <th>Harga</th>
                  <th>Alamat</th>
                  <th>Type</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {filteredPesanan.map((filteredPesanan) => (
                  <tr key={filteredPesanan.id}>
                    <td>
                      <p>{filteredPesanan.nama_kost}</p>
                    </td>
                    <td>
                      <p>{filteredPesanan.harga}</p>
                    </td>
                    <td>
                      <p>{filteredPesanan.alamat}</p>
                    </td>
                    <td>
                      <p>{filteredPesanan.type}</p>
                    </td>
                    <td>
                      {filteredPesanan.statusbayar === 1 ? (
                        <>
                          <RedButton>Belum Dibayar</RedButton>
                          <InfoButton
                            onClick={() => {
                              setModal(true);
                              setIdbayar(filteredPesanan.id);
                            }}
                          >
                            Bayar Sekarang
                          </InfoButton>
                        </>
                      ) : filteredPesanan.statusbayar === 2 ? (
                        <BlueButton>Menunggu Konfirmasi</BlueButton>
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
            <input
              type="file"
              style={{ marginBottom: "30px" }}
              onChange={(e) => {
                setImageUpload(e.target.files[0]);
              }}
            />
            <GreenButton onClick={uploadBukti}>Upload</GreenButton>
          </Modal>
        </>
      )}
    </>
  );
}

export default PesananSaya;

const InfoButton = styled.div`
  color: green;
  font-weight: semibold;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;
const RedButton = styled.div`
  background: coral;
  width: fit-content;
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
`;

const GreenButton = styled(RedButton)`
  background: #00ab55;
  cursor: pointer;
`;

const BlueButton = styled(RedButton)`
  background: skyblue;
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
