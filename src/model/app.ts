export interface AppWindowItem {
  title: string,
  // 重构：comp 是 vue 组件类，如何在 interface 里判断 Vue 组件类
  comp: object
}
