import React, { useState } from "react";

export default function FormularioExp() {
  const [formData, setFormData] = useState({ nombre: "", email: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email) {
      setError("Todos los campos son obligatorios");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("El correo no es válido");
      return;
    }
    setError("");
    alert("Info mandada correctamente 👾");
    setFormData({ nombre: "", email: "" });
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <input
        type="text"
        className="nombre"
        name="nombre"
        value={formData.nombre}
        placeholder="nombre de usuario"
        onChange={handleChange}
      />
      <input
        type="text"
        className="email"
        name="email"
        value={formData.email}
        placeholder="email de usuario"
        onChange={handleChange}
      />
      {error && <p style={{ color: "red", fontSize: 14 }}>{error}</p>}
      <input type="submit" value="enviar" />
    </form>
  );
}
