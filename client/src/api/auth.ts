import { osc } from '@/commons/ajax'

export const login = (loginFrom: any) =>
  osc.post(`/admin/login`, loginFrom)
