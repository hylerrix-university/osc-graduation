<template>
  <v-card>
    <v-card-title>{{ treeNode ? treeNode.name : 'none' }}</v-card-title>
    <v-chip color="primary" text-color="white">一级部门</v-chip>
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  import { OrgTreeItem } from '@/model/org'
  // import {namespace} from 'vuex-class'
  // const Nav = namespace('nav')

  @Component({
    name: 'OrgHeader',
    components: {},
  })
  export default class OrgHeader extends Vue {
    @Prop() public treeNode!: OrgTreeItem
    // @User.State('typeList') public userTypeList!: UserTypeItem[]
  }
</script>

<style scoped>
</style>
