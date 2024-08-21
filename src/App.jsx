import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import LayananAjuan from "./pages/LayananAjuan";
import SyaratAjuan from "./pages/SyaratAjuan";
import PanduanAjuan from "./pages/PanduanAjuan";
import FormulirPenelitian from "./pages/FormulirPenelitian";
import FormulirMagang from "./pages/FormulirMagang";
import ProsesAjuan from "./pages/ProsesAjuan";
import TidakDitemukan from "./assets/components/TidakDitemukan";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route
          path="/persyaratan-perizinan-rekomendasi-penelitian"
          element={<SyaratAjuan />}
        />
        <Route
          path="/panduan-perizinan-rekomendasi-penelitian"
          element={<PanduanAjuan />}
        />
        <Route
          path="/layanan-konsultasi-penelitian"
          element={<LayananAjuan />}
        />
        <Route
          path="/formulir-penelitian/survei/observasi/skripsi/tesis/desertasi"
          element={<FormulirPenelitian />}
        />
        <Route
          path="/formulir-magang/pkl/pkn/kkn"
          element={<FormulirMagang />}
        />
        <Route path="/proses-ajuan" element={<ProsesAjuan />} />
        <Route path="*" element={<TidakDitemukan />} />
      </Routes>
    </Router>
  );
}
