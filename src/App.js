import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Koneksi from "./components/Koneksi";
import Register from "./components/Register";
import RegisterOwner from "./components/RegisterOwner";
import Dashboard from "./components/Dashboard";
import TambahData from "./components/TambahData";
import EditData from "./components/EditData";
import ViewAll from "./components/ViewAll";
import AreaPopuler from "./components/AreaPopuler";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/koneksi" element={<Koneksi />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerowner" element={<RegisterOwner />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tambah-data" element={<TambahData />} />
        <Route path="/edit-data/:id" element={<EditData />} />
        <Route path="/view-all/:type" element={<ViewAll />} />
        <Route path="/area-populer/:area" element={<AreaPopuler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
