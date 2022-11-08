import { post, get } from "./axios/reques";

export const login = (data: any) => {
  return post("/user/login", data);
};
export function getBanners(params: any) {
  return get("/home/banner_images", params);
}
