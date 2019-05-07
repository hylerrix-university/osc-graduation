<template>
  <app-window
    :window="window"
    :windowList="windowList">
  </app-window>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import AppWindow from '@/components/app-window.vue'
  import OperateList from './operate-list/index.vue'
  import OperateDeploy from './operate-deploy/index.vue'

  import { AppWindowItem } from '@/model/app.ts'

  @Component({
    name: 'DocOperate',
    components: { AppWindow },
  })
  export default class DocOperate extends Vue {
    public window: number = 0
    public windowList: AppWindowItem[] = [
      { title: '日志列表', comp: OperateList },
      { title: '日志配置', comp: OperateDeploy },
    ]
  }
</script>

<style scoped>

</style>
