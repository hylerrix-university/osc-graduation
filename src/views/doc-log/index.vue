<template>
  <v-card>
    <app-window
      :window="window"
      :windowList="windowList">
    </app-window>
  </v-card>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import AppWindow from '@/components/app-window.vue'
  import LogList from './log-list/index.vue'
  import LogDeploy from './log-deploy/index.vue'

  import { AppWindowItem } from '@/model/app.ts'

  @Component({
    name: 'DocLog',
    components: { AppWindow },
  })
  export default class DocLog extends Vue {
    public window: number = 0
    public windowList: AppWindowItem[] = [
      { title: '日志列表', comp: LogList },
      // { title: '日志配置', comp: LogDeploy },
    ]
  }
</script>

<style scoped>

</style>
