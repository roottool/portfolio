import useSwr from 'swr'

import fetcher from '@/libs/fetcher'

const useFetchSuspense = <T, FetchError = unknown>(url: string) =>
	useSwr<T, FetchError>(url, fetcher<T>, {
		suspense: true,
	})

export default useFetchSuspense
