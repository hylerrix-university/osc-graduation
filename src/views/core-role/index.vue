<template>
  <app-window
    :window="window"
    :windowList="windowList">
  </app-window>
</template>

<script lang='ts'>
  import { Component, Vue } from 'vue-property-decorator'
  import AppWindow from '@/components/app-window.vue'
  import AuthManage from './auth-manage.vue'
  import RoleManage from './role-manage.vue'

  import { AppWindowItem } from '@/model/app.ts'

  @Component({
    name: 'CoreRole',
    components: { AppWindow },
  })
  export default class CoreRole extends Vue {
    public window: number = 0
    public windowList: AppWindowItem[] = [
      { title: '角色授权', comp: RoleManage},
      { title: '权限管理', comp: AuthManage},
    ]
  }
</script>

<style scoped>
</style>
