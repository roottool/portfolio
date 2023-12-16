import useSWR from 'swr'

import fetcher from '@/libs/fetcher'

const useFetch = <T, FetchError = unknown>(url: string) =>
	useSWR<T, FetchError>(url, fetcher<T>)

export default useFetch
