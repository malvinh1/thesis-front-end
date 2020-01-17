export function validateEmail(email: string) {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}

export function validatePassword(password: string) {
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])[a-z A-Z 0-9]{6,16}$/;
  return passwordRegex.test(password);
}

export default {
  validateEmail,
  validatePassword,
};
