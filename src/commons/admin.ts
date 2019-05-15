import { AdminItem } from '@/model/admin'

/**
 * 返回一个人员用户名
 * @param {string} owner 人员 ID 列表，英文逗号隔开
 */
export const getOwnerNameByIds = (owner: string, adminList: AdminItem[]) => {
  if (!owner) { return }
  const foundAdmin = adminList.find((admin) => {
    return admin.id === parseInt(owner, 10)
  })
  return foundAdmin ? foundAdmin : null
}
