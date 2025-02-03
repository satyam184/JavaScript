const PasswordChecker = (str) => {
  if (str.length != 8) {
    return false;
  }
  if (
    /[a-z/]/.test(str) &&
    /[A-Z]/.test(str) &&
    /[0-9]/.test(str) &&
    /[!@]/.test(str)
  ) {
    return true;
  }
  return false;
};
console.log(PasswordChecker("ashiSh1!"));
console.log(PasswordChecker("Asd!1"));
console.log(PasswordChecker("alskdka!A"));
console.log(PasswordChecker("1234567!"));
console.log(PasswordChecker("Ashi@123"));
