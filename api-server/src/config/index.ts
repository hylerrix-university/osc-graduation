import { address as ipAddress } from 'ip'

export const isDev = process.env.NODE_ENV === 'development'
export const APP_NAME = 'ningo-osc'
export const PORT = 3000
export const IP = ipAddress()
export const SKY_WALKING_IP = ''
