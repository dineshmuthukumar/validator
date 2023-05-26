import baseAxios from "./axios-utils";

export const postData = (data) => baseAxios.post("/api/user/save", data);
