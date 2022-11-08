let urlUsuarios = "http://localhost:3005/usuarios/";

export async function getUsuariosAPI() {
  const res = await fetch(urlUsuarios);
  const data = await res.json();
  return data;
}

export async function addUsuariosAPI(usuario) {
  const res = await fetch(urlUsuarios, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });
  const data = await res.json();
  return data;
}

export async function updateUsuariosAPI(usuario) {
  const res = await fetch(`${urlUsuarios}${usuario._id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });
  const data = await res.json();
  return data;
}

export async function deleteUsuariosAPI(id) {
  const res = await fetch(urlUsuarios + `${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  return data;
}
