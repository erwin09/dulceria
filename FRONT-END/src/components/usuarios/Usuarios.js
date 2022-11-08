import React, { useEffect, useState } from "react";
import {
  addUsuariosAPI,
  deleteUsuariosAPI,
  getUsuariosAPI,
  updateUsuariosAPI,
} from "../../apis/usuariosApi";
import TablaUsuarios from "./TablaUsuarios";
import FormUsuarios from "./FormUsuarios";

function Usuarios() {
  const [usuarios, listaUsuarios] = useState([]);
  const [usuario, setUsuario] = useState(null);
  useEffect(() => {
    getUsuariosAPI().then((usuarios) => listaUsuarios(usuarios));
  }, [usuarios]); 

  const guardarUsuario = (usuario) => {
    console.log(usuario);
    if (usuario._id == null) {
      return addUsuariosAPI(usuario).then((data) => {
        listaUsuarios([...usuarios, data]);
      });
    } else {
      return updateUsuariosAPI(usuario).then((data) => {
        return data;
      });
    }
  };

  const eliminarUsuario = (id) => {
    return deleteUsuariosAPI(id).then((data) => {
      if (data.deleteUsuariosAPI === 1) {
        listaUsuarios(usuarios.filter((usuario) => usuario._id !== id));
      }
    });
  };

  const mostrarUsuario = (usuario) => {
    setUsuario(usuario);
  };

  return (
    <section className="container" bgcolor="blue">
      <h3>Usuarios</h3>
      {<FormUsuarios onSave={guardarUsuario} dataUsuario={usuario} />}
      {
        <TablaUsuarios
          usuarios={usuarios}
          onDelete={eliminarUsuario}
          onSelect={mostrarUsuario}
        />
      }
    </section>
  );
}

export default Usuarios;
