import { RequestConfig } from './types/request';
import {AxiosError} from './types/error'
import axios from "axios";

const axiosInstance = axios.create()

const CancelToken = axios.CancelToken
export let source = CancelToken.source()

export const cancelApi = () => {
    source.cancel()
    source = CancelToken.source()
}

export const api = async <Response = unknown, Request = unknown>(req: RequestConfig<Request>): Promise<Response> => {
  const res = await axiosInstance.request<Response, Response>({
      ...req,
      cancelToken: source.token,
  })

  return res
}

export type {
  RequestConfig,
  AxiosError
}