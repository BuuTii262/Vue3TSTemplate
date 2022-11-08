import axios from "./axios";
import { ResponseData } from "../../types";
import { cloneDeep, omit, assign } from "lodash-es";

/**
 * @Get_method
 * @param apiUrl
 * @param params
 * @returns
 */
export function get(apiUrl: string, params?: any): Promise<ResponseData> {
  let paramsData = {};
  if (params && params.page && params.pageSize) {
    const data = cloneDeep(params);
    const pager = {
      page: data.page,
      pageSize: data.pageSize,
    };
    const pagerParams = { pager: JSON.stringify(pager) };

    const remainderParams = omit(data, ["page", "pageSize", "options"]);
    paramsData = assign(pagerParams, data.options, remainderParams);
  } else {
    paramsData = params;
  }
  return axios.get(apiUrl, { params: paramsData });
}

/**
 * @Post_method
 * @param apiUrl
 * @param params
 * @returns
 */
export function post(apiUrl: string, params?: any): Promise<ResponseData> {
  let postData = {};
  if (params && params.page && params.pageSize) {
    const data = cloneDeep(params);
    const pager = {
      page: data.page,
      pageSize: data.pageSize,
    };
    const pagerParams = { pager: pager };

    const remainderParams = omit(data, ["page", "pageSize", "options"]);
    postData = assign(pagerParams, { options: data.options }, remainderParams);
  } else {
    postData = params;
  }
  return axios.post(apiUrl, postData);
}

/**
 * @Put_method
 * @param apiUrl
 * @param params
 * @returns
 */
export function $put(apiUrl: string, params?: any): Promise<ResponseData> {
  return axios.put(apiUrl, params);
}

/**
 * @Delete_method
 * @param apiUrl
 * @param params
 * @returns
 */
export function $delete(apiUrl: string, params?: any): Promise<ResponseData> {
  return axios.delete(apiUrl, { data: params });
}
