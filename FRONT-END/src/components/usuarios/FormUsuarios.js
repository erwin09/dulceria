import React, { useEffect, useState } from "react";

function FormUsuarios(props) {
  const { onSave, dataUsuario } = props;
  const [usuario, setUsuario] = useState({
    _id: "",
    usuario: "",
    clave: "",
    tipoDeUsuario: "",
    nombres: "",
    apellidos: "",
    tipDoc: "",
    numDoc: "",
    direccion: "",
    telefono: "",
    email: "",
    estado: "",
  });

  useEffect(() => {
    if (dataUsuario) setUsuario(dataUsuario);
    else
      setUsuario({
        _id: "",
        usuario: "",
        clave: "",
        tipoDeUsuario: "",
        nombres: "",
        apellidos: "",
        tipDoc: "",
        numDoc: "",
        direccion: "",
        telefono: "",
        email: "",
        estado: "",
      });
  }, [dataUsuario]);

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSave(usuario);
    limpiar();
  };

  const limpiar = () => {
    setUsuario({
      _id: "",
      usuario: "",
      clave: "",
      tipoDeUsuario: "",
      nombres: "",
      apellidos: "",
      tipDoc: "",
      numDoc: "",
      direccion: "",
      telefono: "",
      email: "",
      estado: "",
    });
  };

  return (
    <div className="row">
      <form className="row g-3" onSubmit={onSubmit}>
        <input
          type="hidden"
          name="_id"
          value={usuario._id}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <div className="col-md-6">
          <label className="form-label">Usuario:</label>
          <input
            type="text"
            className="form-control"
            name="usuario"
            value={usuario.usuario}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Clave:</label>
          <input
            type="text"
            className="form-control"
            name="clave"
            value={usuario.clave}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>

        <div
          className="col-md-6"
          value={usuario.tipoDeUsuario}
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <div className="col-md-12">
            <label className="form-label"> Tipo De Usuario:</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="tipoDeUsuario"
              value="Administrador"
              onChange={(e) => {
                handleChange(e);
              }}
              checked={usuario.tipoDeUsuario === "Administrador"}
            />
            Administrador
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="tipoDeUsuario"
              value="Cliente"
              onChange={(e) => {
                handleChange(e);
              }}
              checked={usuario.tipoDeUsuario === "Cliente"}
            />
            Cliente
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="tipoDeUsuario"
              value="Transportador"
              onChange={(e) => {
                handleChange(e);
              }}
              checked={usuario.tipoDeUsuario === "Transportador"}
            />
            Transportador
          </div>
        </div>
        <div className="col-md-6">
          <label className="form-label">Nombres:</label>
          <input
            type="text"
            className="form-control"
            name="nombres"
            value={usuario.nombres}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Apellidos:</label>
          <input
            type="text"
            className="form-control"
            name="apellidos"
            value={usuario.apellidos}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Tipo Documento:</label>
          <select
            name="tipDoc"
            className="form-select"
            value={usuario.tipDoc}
            onChange={(e) => {
              handleChange(e);
            }}
          >
            <option value="0">Seleccione...</option>
            <option value="CC">Cedula Ciudadania</option>
            <option value="NIT">NIT</option>
            <option value="CE">Cedula Estrangeria</option>
            <option value="PASS">Pasaporte</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Numero de documento:</label>
          <input
            type="text"
            className="form-control"
            name="numDoc"
            value={usuario.numDoc}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">direccion:</label>
          <input
            type="text"
            className="form-control"
            name="direccion"
            value={usuario.direccion}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Telefono:</label>
          <input
            type="text"
            className="form-control"
            name="telefono"
            value={usuario.telefono}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email:</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={usuario.email}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="col-md-6" value={usuario.estado}>
          <div className="col-md-12">
            <label className="form-label">Estado:</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="estado"
              value="Activo"
              onChange={(e) => {
                handleChange(e);
              }}
              checked={usuario.estado === "Activo"}
            />
            Activo
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="estado"
              value="Inactivo"
              onChange={(e) => {
                handleChange(e);
              }}
              checked={usuario.estado === "Inactivo"}
            />
            Inactivo
          </div>
        </div>
        <div className="col-md-6">
          <input
            className="btn btn-primary btn-sm"
            type="submit"
            value="Guardar"
          />
          <span> </span>
          <button
            className="btn btn-light btn-sm"
            color="success"
            onClick={limpiar}
          >
            limpiar
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormUsuarios;
