import { AxiosError, api, RequestConfig } from '@yujeongjeon/axios'
import {SWRConfiguration, SWRResponse} from 'swr'
import useSWRImmutable from 'swr/immutable'

interface SwrReturn<Data, Error>
    extends Pick<SWRResponse<Data, AxiosError<Error>>, 'isValidating' | 'mutate' | 'error'> {
    data: Data | undefined
}

export type SwrConfig<Data = unknown, Error = unknown> = SWRConfiguration<Data, AxiosError<Error>>

export default function useRequest<Data = unknown, Error = unknown, Request = undefined>(
    req: RequestConfig<Request>,
    {...config}: SwrConfig<Data, Error> = {},
): SwrReturn<Data, Error> {
    const key = req.url || ''
    const fetcher = () => api<Data, Request>(req)

    const {data, error, mutate, isValidating} = useSWRImmutable(key, fetcher, {
        ...config,
    })

    return {
        data,
        error,
        isValidating,
        mutate,
    }
}
