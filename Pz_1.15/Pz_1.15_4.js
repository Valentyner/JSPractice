function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(email);
}

const email1 = "test@test.test";
const email2 = "invalid_email";
const email3 = "test@example";

console.log(isValidEmail(email1));
console.log(isValidEmail(email2));
console.log(isValidEmail(email3));
