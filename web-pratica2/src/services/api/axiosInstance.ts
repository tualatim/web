import axios from 'axios'

const SECOND = 1_000

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5 * SECOND,
  headers: {
    'Content-Type': 'application/json',
  },
})


export const { get, post, patch, put, options, ...rest } = axiosInstance
export const del = axiosInstance.delete
