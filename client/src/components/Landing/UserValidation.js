export function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email) return "You must put an email";
  if (!emailRegex.test(email)) return "The email is not valid";
  return "";
}

export function validatePassword(password) {
  if (!password) return "You must put a password";
  return "";
}

export function validatePasswordCreated(password, checkPassword) {
  const passwordNumberRegex = /\d/;
  const passwordLengthRegex = /^.{6,15}$/;
  if (!password) return "You must put a password";
  if (!passwordNumberRegex.test(password))
    return "Password must contain at least one number";
  if (!passwordLengthRegex.test(password))
    return "Password must be between 6 and 15 characters";
  if (password !== checkPassword) return "The passwords don't match";
  return "";
}
