<template>
  <v-card-text>
    {{ curOrgNode.description ? curOrgNode.description : '暂无简介' }}
  </v-card-text>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  
  import { OrgTreeItem } from '@/model/org'
  import { namespace } from 'vuex-class'
  const Org = namespace('org')
  
  @Component({
    name: 'OrgIntro',
    components: {},
  })
  export default class OrgIntro extends Vue {
    @Org.State public curOrgNode!: OrgTreeItem
  }
</script>

<style scoped>
</style>
