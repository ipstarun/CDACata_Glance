//islogidInn or not

export const isLoggedIn = () => {
  let data = localStorage.getItem("data");
  if (data != null) {
    return true;
  } else {
    return false;
  }
};

//do loding =>set to local storage
// export default doLogin = (data, next) => {
//   localStorage.setItem("data", JSON.stringify(data));
//   next();
// };

//doLogout =>remove from local storage
export const doLogout = (next) => {
  localStorage.removeItem("data");
  next();
};

//get current user

export const getCurrentUserDetail = () => {
  if (isLoggedIn) {
    return JSON.parse(localStorage.getItem("data"));
  } else {
    return false;
  }
};
