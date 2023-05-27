export function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email) return "Ingresar email";
  if (!emailRegex.test(email)) return "Ingresa un email válido";
  return "";
}

export function validatePassword(password) {
  if (!password) return "Ingresar contraseña";
  return "";
}
