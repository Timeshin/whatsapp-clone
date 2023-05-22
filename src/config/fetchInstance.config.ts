import axios from 'axios'

const fetchInstance = axios.create({ baseURL: process.env.VITE_API_URL })

export default fetchInstance
