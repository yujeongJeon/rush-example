import { RequestConfig } from './types/request';
import {AxiosError} from './types/error'
import axios from "axios";

const axiosInstance = axios.create()

export const api = async <Response = unknown, Request = unknown>(req: RequestConfig<Request>): Promise<Response> => {
  const res = await axiosInstance.request<Response, Response>({
      ...req,
  })

  return res
}

export type {
  RequestConfig,
  AxiosError
}