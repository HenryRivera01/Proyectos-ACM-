import React from "react";
import { useForm } from "../hooks/useForm";
import { isRequired, isEmail, minLength } from "../utils/validators";

export default function FormularioValidado() {
  const initial = { nombre: "", email: "", mensaje: "" };

  const validators = {
    nombre: (val) => {
      if (!isRequired(val)) return "El nombre es obligatorio";
      if (!minLength(val, 3))
        return "El nombre debe tener al menos 3 caracteres";
      return null;
    },
    email: (val) => {
      if (!isRequired(val)) return "El correo es obligatorio";
      if (!isEmail(val)) return "El correo no tiene formato válido";
      return null;
    },
    mensaje: (val) => {
      if (!isRequired(val)) return "El mensaje es obligatorio";
      if (!minLength(val, 10))
        return "El mensaje debe tener al menos 10 caracteres";
      return null;
    },
  };

  const { formData, errors, handleChange, validateAll, setFormData } = useForm(
    initial,
    validators
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const ok = validateAll();
    if (!ok) {
      alert("Corrige los errores antes de enviar");
      return;
    }
    alert(
      `Datos enviados:\nNombre: ${formData.nombre}\nEmail: ${formData.email}\nMensaje: ${formData.mensaje}`
    );
    setFormData(initial);
  };

  return (
    <form className="formulario" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Tu nombre"
        />
        {errors.nombre && <p className="error">{errors.nombre}</p>}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="tu@correo.com"
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="field">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Escribe tu mensaje..."
        />
        {errors.mensaje && <p className="error">{errors.mensaje}</p>}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}
