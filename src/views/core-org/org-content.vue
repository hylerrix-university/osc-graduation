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
  import OrgIntro from './org-intro.vue'

  import { AppWindowItem } from '@/model/app'

  @Component({
    name: 'OrgContent',
    components: {
      AppWindow,
    },
  })
  export default class OrgContent extends Vue {
    public windowList: AppWindowItem[] = [
      { title: '部门简介', comp: OrgIntro},
    ]
  }
</script>

<style scoped>
</style>
