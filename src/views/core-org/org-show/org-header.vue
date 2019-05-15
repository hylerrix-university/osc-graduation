<template>
  <v-card v-if="curOrgNode">
    <v-card-title>
      {{ curOrgNode.name }}
      <v-chip small color="primary" text-color="white">一级组织</v-chip>
    </v-card-title>
    <v-card-text>
      负责人: {{ getOwnerNameByIds(curOrgNode.owner) }}
    </v-card-text>
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  import { getOwnerNameByIds } from '@/commons/admin'

  import { OrgItem } from '@/model/org'
  import { AdminItem } from '@/model/admin'
  import { namespace } from 'vuex-class'
  const Org = namespace('org')
  const Admin = namespace('admin')

  @Component({
    name: 'OrgHeader',
    components: {},
  })
  export default class OrgHeader extends Vue {
    @Org.State public curOrgNode!: OrgItem
    @Admin.State('list') public adminList!: AdminItem[]

    public getOwnerNameByIds(owner: string) {
      return getOwnerNameByIds(owner, this.adminList)
    }
  }
</script>

<style scoped>
</style>
