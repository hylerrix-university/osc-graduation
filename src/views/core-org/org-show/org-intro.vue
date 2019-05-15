<template>
  <v-card-text>
    {{ curOrgNode.remark ? curOrgNode.remark : '暂无简介' }}
  </v-card-text>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  
  import { OrgItem } from '@/model/org'
  import { namespace } from 'vuex-class'
  const Org = namespace('org')
  
  @Component({
    name: 'OrgIntro',
    components: {},
  })
  export default class OrgIntro extends Vue {
    @Org.State public curOrgNode!: OrgItem
  }
</script>

<style scoped>
</style>
