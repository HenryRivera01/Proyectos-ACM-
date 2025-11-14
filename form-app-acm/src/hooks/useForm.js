import { useState } from "react";

// useForm: maneja formData y errores. validators: { campo: (valor) => null | "mensaje" }
export function useForm(initialValues = {}, validators = {}) {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    const validator = validators[name];
    if (!validator) return null;
    return validator(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateAll = () => {
    const newErrors = {};
    for (const key in validators) {
      const error = validateField(key, formData[key] ?? "");
      if (error) newErrors[key] = error;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    formData,
    errors,
    handleChange,
    validateAll,
    setFormData,
    setErrors,
  };
}
