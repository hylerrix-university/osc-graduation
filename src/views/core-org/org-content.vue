<template>
  <v-card>
    {{ treeNode }}
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  import { OrgTreeItem } from '@/model/org'

  @Component({
    name: 'OrgContent',
    components: {},
  })
  export default class OrgContent extends Vue {
    @Prop() public treeNode!: OrgTreeItem
    // @User.State('typeList') public userTypeList!: UserTypeItem[]
  }
</script>

<style scoped>
</style>
