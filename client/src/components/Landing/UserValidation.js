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

export function validatePasswordCreated(password, checkPassword) {
  const passwordNumberRegex = /\d/;
  const passwordLengthRegex = /^.{6,15}$/;
  if (!password) return "Este campo es obligatorio";
  if (!passwordNumberRegex.test(password))
    return "La contraseña debe contener al menos un número";
  if (!passwordLengthRegex.test(password))
    return "La contraseña debe tener entre 6 y 15 caracteres";
  if (password !== checkPassword)
    return "Las contraseñas ingresadas no coinciden";
  return "";
}
