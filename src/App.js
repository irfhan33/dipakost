import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Koneksi from "./components/Koneksi";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/koneksi" element={<Koneksi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
