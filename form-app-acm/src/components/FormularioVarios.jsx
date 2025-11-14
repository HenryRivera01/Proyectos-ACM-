import React, { useState } from "react";
import { isEmail, minLength, isRequired } from "../utils/validators";

export default function FormularioVarios() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => {
      const out = { ...prev };
      if (name === "email") out.email = isEmail(value) ? "" : "Email inválido";
      if (name === "mensaje")
        out.mensaje = minLength(value, 10) ? "" : "Mínimo 10 caracteres";
      if (name === "nombre")
        out.nombre = isRequired(value) ? "" : "Nombre obligatorio";
      return out;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!isRequired(formData.nombre)) newErrors.nombre = "Nombre obligatorio";
    if (!isEmail(formData.email)) newErrors.email = "Email inválido";
    if (!minLength(formData.mensaje, 10))
      newErrors.mensaje = "Mensaje mínimo 10 caracteres";
    setErrors(newErrors);
    if (Object.keys(newErrors).length) return;
    alert(`Enviado:\n${JSON.stringify(formData)}`);
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <form className="formulario" onSubmit={handleSubmit} noValidate>
      <input
        name="nombre"
        placeholder="nombre"
        value={formData.nombre}
        onChange={handleChange}
      />
      {errors.nombre && <p className="error">{errors.nombre}</p>}
      <input
        name="email"
        placeholder="email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}
      <textarea
        name="mensaje"
        placeholder="mensaje"
        value={formData.mensaje}
        onChange={handleChange}
      />
      {errors.mensaje && <p className="error">{errors.mensaje}</p>}
      <input type="submit" value="Enviar" />
    </form>
  );
}
