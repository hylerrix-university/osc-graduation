export interface AdminItem {
  id: number
  username: string
  password: string
  email: string
  nickname: string
  sex: number
  phone: string
  github: string
  avatar: string
  count: number
  status: number
}

export interface CreateAdminItem {
  username: string
  password: string
  email: string
  nickname: string
  sex: number
  phone: string
  github: string
  avatar: string
  status: number
}

export interface DeleteAdminItem {
  id: number
}
