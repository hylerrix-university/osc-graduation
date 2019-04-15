import axios from 'axios'

export const cms = axios.create({
    baseURL: '/cms',
})

cms.interceptors.response.use((r: any) => r.data)
