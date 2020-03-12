import axios from 'axios'

export const osc = axios.create({
    baseURL: '/osc',
})

osc.interceptors.response.use((r: any) => r.data)
