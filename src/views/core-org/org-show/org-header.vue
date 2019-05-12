<template>
  <v-card v-if="curOrgNode">
    <v-card-title>
      {{ curOrgNode.name }}
      <v-chip small color="primary" text-color="white">一级部门</v-chip>
    </v-card-title>
    <v-card-text>
      负责人: {{ getOwnersNameByIds(curOrgNode.owners) }}
    </v-card-text>
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  import { getOwnersNameByIds } from '@/commons/admin'

  import { OrgTreeItem } from '@/model/org'
  import { AdminItem } from '@/model/admin'
  import { namespace } from 'vuex-class'
  const Org = namespace('org')
  const Admin = namespace('admin')

  @Component({
    name: 'OrgHeader',
    components: {},
  })
  export default class OrgHeader extends Vue {
    @Org.State public curOrgNode!: OrgTreeItem
    @Admin.State('list') public adminList!: AdminItem[]

    public getOwnersNameByIds(owners: string) {
      return getOwnersNameByIds(owners, this.adminList)
    }
  }
</script>

<style scoped>
</style>
