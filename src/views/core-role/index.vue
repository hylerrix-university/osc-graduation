<template>
  <app-window
    :windowList="windowList">
  </app-window>
</template>

<script lang='ts'>
  import { Component, Vue } from 'vue-property-decorator'
  import AppWindow from '@/components/app-window.vue'
  import AuthManage from './auth-manage/index.vue'
  import RoleManage from './role-manage/index.vue'

  import { AppWindowItem } from '@/model/app.ts'

  @Component({
    name: 'CoreRole',
    components: { AppWindow },
  })
  export default class CoreRole extends Vue {
    public windowList: AppWindowItem[] = [
      { title: '角色授权', comp: RoleManage},
      { title: '权限管理', comp: AuthManage},
    ]
  }
</script>

<style scoped>
</style>
