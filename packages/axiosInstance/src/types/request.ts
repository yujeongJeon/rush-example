import { AxiosRequestConfig } from "axios";

export interface RequestConfig<T> extends AxiosRequestConfig {
    query?: T
    body?: T
}