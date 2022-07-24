import axios from 'axios'

const fetcher = <T>(url: string) => axios.get<T>(url).then((response) => response.data)

export default fetcher
