import { getNavList } from '@/api/nav'
import { NavItem } from '@/model/nav'

interface NavState {
    list: NavItem[],
    loading: boolean
}

const state = {
    list: [],
    loading: false,
}

const getters = {
    // 分别获取一、二级导航
    nav1: (s: NavState) => s.list.filter((i: NavItem) => i.id.length === 6),
    nav2: (s: NavState) => s.list.filter((i) => i.id.length === 9),
}

const actions = {
    async getNavList({commit}: any) {
        commit('LOADING_START')
        const {rows}: any = await getNavList()
        if (rows) {
            commit('SET_NAV_LIST', rows)
        }
        commit('LOADING_END', rows)
    },
}

const mutations = {
    ['LOADING_START']: (s: NavState) => s.loading = true,
    ['LOADING_END']: (s: NavState) => s.loading = false,
    ['SET_NAV_LIST']: (s: NavState, data: NavItem[]) => s.list = data,
}

const namespaced = true

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced,
}
