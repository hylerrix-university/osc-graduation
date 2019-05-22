<template>
  <v-card>
    <app-window
      :windowList="windowList">
    </app-window>
  </v-card>
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
      { title: '授权管理', comp: AuthManage},
      { title: '角色列表', comp: RoleManage},
    ]
  }
</script>

<style scoped>
</style>
