import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./login";
import reportWebVitals from "./reportWebVitals";
import Register from "./Register";
import DocumentosUsuario from "./DocumentosUsuario";
import Documentos from "./Documentos";
import DocumentoDetalhes from "./DocumentoDetalhes";
import NovoDocumento from "./NovoDocumento";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/documento/:id" element={<DocumentoDetalhes />} />
        <Route path="/documentos" element={<Documentos />} />
        <Route path="/documentoUsuario" element={<DocumentosUsuario />} />
        <Route path="/novoDocumento" element={<NovoDocumento />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
