import React from "react";

function TablaUsuarios(props) {
  const { usuarios, onDelete, onSelect } = props;
  return (
    <table className="table table-striped table-bordered mt-4">
      <thead>
        <tr className="table-primary">
          <th scope="col">Usuario</th>
          <th scope="col">Clave</th>
          <th scope="col">Tipo De Usuario</th>
          <th scope="col">Nombres</th>
          <th scope="col">Apellidos</th>
          <th scope="col">Tipo Documento</th>
          <th scope="col">Numero Documento</th>
          <th scope="col">Direccion</th>
          <th scope="col">Telefono</th>
          <th scope="col">Email</th>
          <th scope="col">Estado</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((usuario) => {
          return (
            <tr key={usuario._id}>
              <td>{usuario.usuario}</td>
              <td>{usuario.clave}</td>
              <td>{usuario.tipoDeUsuario}</td>
              <td>{usuario.nombres}</td>
              <td>{usuario.apellidos}</td>
              <td>{usuario.tipDoc}</td>
              <td>{usuario.numDoc}</td>
              <td>{usuario.direccion}</td>
              <td>{usuario.telefono}</td>
              <td>{usuario.email}</td>
              <td>{usuario.estado}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(usuario._id)}
                >
                  Eliminar
                </button>

                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => onSelect(usuario)}
                >
                  Seleccionar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TablaUsuarios;
