import { myAxios } from "./Helper";

export const signUp = (user) => {
  return myAxios
    .post("http://localhost:8282/student/register", user)
    .then((response) => response.data);
};

export const loginUser = (loginDetails) => {
  return myAxios
    .post("http://localhost:8282/student/login", loginDetails)
    .then((response) => response.data);
};

export const adminUser = (loginDetails) => {
  return myAxios
    .post("http://localhost:8282/student/admin", loginDetails)
    .then((response) => response.data);
};

export const upLoadfile = (fileDetail, cb) => {
  return myAxios
    .post("http://localhost:8282/uploadFile", fileDetail)
    .then(() => cb());
};
