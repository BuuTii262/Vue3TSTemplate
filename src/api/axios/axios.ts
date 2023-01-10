import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import router from "../../router/index";
import store from "../../store";

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_HOST,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * @Request
 */
service.interceptors.request.use(
  //Success request
  (config) => {
    let token: string = store.state.user.user.token as string;
    if (token) {
      config.headers = {
        Authorization: token,
        "Accept-Language": "en",
      };
    } else {
      config.headers = {
        Authorization: token,
        "Accept-Language": "en",
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * @Response
 */
service.interceptors.response.use(
  //Success response
  (res) => {
    if (res.data.code != 0) {
      console.log(res.data.err_msg);
      return Promise.reject(res.data);
    }

    return res.data;
  },
  //Fail response
  (error) => {
    // switch (error.response.status) {
    //   case 412:
    //     router.push("/home");
    //     localStorage.clear();
    //     break;
    //   case 401:
    //     router.push("/home");
    //     localStorage.clear();
    //     break;
    // }
    return Promise.reject(error);
  }
);

export default service;
