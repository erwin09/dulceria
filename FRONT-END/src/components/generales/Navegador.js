import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Usuarios from "./../usuarios/Usuarios";
import Proveedores from "./../proveedores/Proveedores";


function Navegador() {
  return (
    <div>
      <header className="container justify-content-center py-3 mb-4 border-bottom">
      <nav className="navbar navbar-dark bg-primary" >
        <ul>
          <a className="navbar-brand" href="/">Home </a>
          <a className="navbar-brand" href="/usuarios">Usuarios </a>
          <a className="navbar-brand" href="/proveedores">Proveedores </a>
        </ul>
      </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div><h1>HOME</h1></div>}/>
          <Route path="/usuarios" element={<Usuarios/>}/>
          <Route path="/proveedores" element={<Proveedores/>}/>

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navegador;
