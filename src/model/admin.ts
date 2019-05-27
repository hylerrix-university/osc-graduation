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
  email: string
  nickname: string
}

export interface UpdateAdminItem {
  // username: string
  // password: string
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
