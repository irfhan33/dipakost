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
} from "firebase/firestore";
import { db } from "./../firebaseConfig";
import AddIcon from "@mui/icons-material/Add";
import Sidebar from "./Sidebar";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";
import { selectUserName } from "../features/user/userSlice";
function Dashboard() {
  const [kosts, setKosts] = useState([]);
  const user = useSelector(selectUserName);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "kost"), orderBy("nama_kost", "asc")),
      (snapshot) => {
        setKosts(
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

  return (
    <Container>
      <Sidebar />
      <Content>
        <ContentHeader>
          <h1>Data Kost {user}</h1>
          <Link to="/tambah-data">
            <ButtonTambahData>
              <AddIcon />
              <span>Tambah Data</span>
            </ButtonTambahData>
          </Link>
        </ContentHeader>

        <TableWrapper>
          <table cellSpacing="0" cellPadding="0">
            <thead>
              <tr>
                <th>Nama Kost</th>
                <th>Lokasi Google Map</th>
                <th>Harga</th>
                <th>Alamat</th>
                <th>Type</th>
                <th>Keterangan</th>
                <th>Gambar 1</th>
                <th>Gambar 2</th>
                <th>Gambar 3</th>
                <th>Kategori</th>
                <th>Area</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {kosts.map((kost) => (
                <tr key={kost.id}>
                  <td>
                    <p>{kost.nama_kost}</p>
                  </td>
                  <td>
                    <p>{kost.lokasi_gmaps}</p>
                  </td>
                  <td>
                    <p>{kost.harga}</p>
                  </td>
                  <td>
                    <p>{kost.alamat}</p>
                  </td>
                  <td>
                    <p>{kost.type}</p>
                  </td>
                  <td>
                    <p>{kost.keterangan}</p>
                  </td>
                  <td>
                    <p>{kost.gambar1}</p>
                  </td>
                  <td>
                    <p>{kost.gambar2}</p>
                  </td>
                  <td>
                    <p>{kost.gambar3}</p>
                  </td>
                  <td>
                    <p>{kost.kategori}</p>
                  </td>
                  <td>
                    <p>{kost.area}</p>
                  </td>
                  <td>
                    <ActionWrapper>
                      <DeleteIcon
                        className="delete-icon"
                        onClick={deleteData.bind(this, kost.id)}
                      />
                      <Link to={`/edit-data/${kost.id}`}>
                        <EditIcon className="edit-icon" />
                      </Link>
                    </ActionWrapper>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableWrapper>
      </Content>
    </Container>
  );
}

export default Dashboard;

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
      line-clamp: 2;
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
        -webkit-line-clamp: 2; /* number of lines to show */
        line-clamp: 2;
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
