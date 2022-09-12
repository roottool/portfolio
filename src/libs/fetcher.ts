import ky from 'ky'

const fetcher = <T>(url: string) => ky.get(url).json<T>()

export default fetcher
