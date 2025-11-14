export function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export function validateName(name) {
  return /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{2,}$/.test(name.trim());
}
