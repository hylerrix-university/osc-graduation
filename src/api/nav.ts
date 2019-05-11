// import { cms } from '@/commons/ajax'
import { NavList } from '@/constant/nav'

// export const getNavList = () =>
//     cmdb.get('/core/card/?username=ZmF%2B3FLqAStF6jHWrOTNjQ%3D%3D')

/**
 * 根据加密用户名获取导航
 */
export const getNavList = () => Promise.resolve({
    success: true,
    data: [...NavList],
})
