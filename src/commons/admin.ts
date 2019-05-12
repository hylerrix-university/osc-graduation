import { AdminItem } from '@/model/admin'

/**
 * 根据英文逗号隔开的人员 id 列表，返回人员用户名列表，支持单个人员的用户名返回
 * @param {string} owners 人员 ID 列表，英文逗号隔开
 */
export const getOwnersNameByIds = (owners: string, adminList: AdminItem[]) => {
  if (!owners) { return }
  const curOwenerList: string[] = []
  owners.split(',').forEach((id) => {
    const foundAdmin = adminList.find((admin) => {
      return admin.id === id
    })
    if (foundAdmin)  { curOwenerList.push(foundAdmin.username) }
  })
  return curOwenerList.join(',')
}
