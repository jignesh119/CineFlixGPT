const validateData = (email, pwd) => {
  const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/.test(
    email,
  );
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pwd);
  if (!isValidEmail) return "email not valid homie";
  if (!isValidPassword) return "pwd not valid homie";
  return null;
};
export default validateData;
