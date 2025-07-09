import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./Pages/Beranda";
import Adopsi from "./Pages/Adopsi";
import AdopsiDetail from "./Pages/AdopsiDetail";
import AdopsiForm from "./Pages/AdopsiForm";
import Artikel from "./Pages/Artikel";
import Donasi from "./Pages/Donasi";
import Sukarelawan from "./Pages/Sukarelawan";
import Kontak from "./Pages/Kontak";
import Komunitas from "./Pages/Komunitas";
import Comment from "./Components/Comment";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import UserProfil from "./Pages/UserProfil";
import PrivateRoutes from "./Components/PrivateRoutes";
import PublicRoutes from "./Components/PublicRoutes";
import { AuthProvider } from "./Auth/AuthContext";
import Navbar from "./Components/Navbar";
import Latihan from "./Pages/Latihan";
import Features from "./Pages/Features";


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<UserProfil />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Beranda />} />
            <Route path="/adopsi" element={<Adopsi />} />
            <Route path="/adopsi/:id" element={<AdopsiDetail />} />
            <Route path="/tambah-adopsi" element={<AdopsiForm />} />
            <Route path="/artikel" element={<Artikel />} />
            <Route path="/donasi" element={<Donasi />} />
            <Route path="/sukarelawan" element={<Sukarelawan />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/komunitas" element={<Komunitas />} />
            <Route path="/latihan" element={<Latihan />} />
            <Route path="/features" element={<Features />} />
            <Route path="/id:comment" element={<Comment />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
