import useSWR from 'swr'

import fetcher from '@/libs/fetcher'

const useFetchSuspense = <T, FetchError = unknown>(url: string) =>
	useSWR<T, FetchError>(url, fetcher<T>, {
		suspense: true,
	})

export default useFetchSuspense
