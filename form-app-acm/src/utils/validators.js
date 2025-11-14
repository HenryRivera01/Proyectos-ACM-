export const isRequired = (value) => String(value ?? "").trim() !== "";

export const isEmail = (value) => {
  return /\S+@\S+\.\S+/.test(String(value ?? ""));
};

export const minLength = (value, length) => {
  return String(value ?? "").trim().length >= length;
};
