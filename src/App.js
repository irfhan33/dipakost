import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Koneksi from "./components/Koneksi";
import Register from "./components/Register";
import RegisterOwner from "./components/RegisterOwner";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/koneksi" element={<Koneksi />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerowner" element={<RegisterOwner />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
