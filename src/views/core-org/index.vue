<template>
  <v-card>
    <app-window
      :windowList="windowList"
    ></app-window>
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  import AppWindow from '@/components/app-window.vue'
  import OrgShow from './org-show/index.vue'
  import OrgManage from './org-manage/index.vue'

  import { AppWindowItem } from '@/model/app'
  import { namespace } from 'vuex-class'
  const Org = namespace('org')

  @Component({
    name: 'CoreOrg',
    components: {
      AppWindow,
      OrgShow,
      OrgManage,
    },
  })
  export default class CoreOrg extends Vue {
    @Org.Action public setOrgList!: any
    public windowList: AppWindowItem[] = [
      { title: '部门管理', comp: OrgManage },
      // { title: '部门展示', comp: OrgShow },
    ]

    public created() {
      this.setOrgList().then()
    }
  }
</script>

<style scoped>
</style>
