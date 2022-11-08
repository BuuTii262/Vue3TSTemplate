import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import router from "../../router/index";
import { useStore } from "vuex";
let store = useStore();

const service: AxiosInstance = axios.create({
  baseURL: "http:10.10.10.20:8080",
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
    let token: string = store.state.user.user.token;
    if (token) {
      config.headers!.Authorization = token;
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
    if (res.data.err_code != 0) {
      console.log(res.data.err_msg);
      return Promise.reject(res.data);
    }
    return res.data;
  },
  //Fail response
  (error) => {
    switch (error.response.status) {
      case 412:
        router.push("/home");
        localStorage.clear();
        break;
      case 401:
        router.push("/home");
        localStorage.clear();
        break;
    }
    return Promise.reject(error);
  }
);

export default service;
