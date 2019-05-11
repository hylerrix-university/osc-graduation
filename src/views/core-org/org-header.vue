<template>
  <v-card>
    <v-card-title>
      {{ treeNode.name }}
      <v-chip small color="primary" text-color="white">一级部门</v-chip>
    </v-card-title>
    <v-card-text v-if="treeNode.owners">
      负责人: {{ getOwnersName(treeNode.owners) }}
    </v-card-text>
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  import { OrgTreeItem } from '@/model/org'
  import { AdminItem } from '@/model/admin'
  import { namespace } from 'vuex-class'
  const Admin = namespace('admin')

  @Component({
    name: 'OrgHeader',
    components: {},
  })
  export default class OrgHeader extends Vue {
    @Prop() public treeNode!: OrgTreeItem
    @Admin.State('list') public adminList!: AdminItem[]
    @Admin.Action public setAdminList!: any

    public created() {
      this.setAdminList().then()
    }

    public getOwnersName(owners: string) {
      const curOwenerList: string[] = []
      owners.split(',').forEach((id) => {
        console.log(id)
        const foundAdmin = this.adminList.find((admin: AdminItem) => {
          return admin.id === id
        })
        if (foundAdmin)  {
          curOwenerList.push(foundAdmin.username)
        }
      })
      return curOwenerList.join(', ')
    }
  }
</script>

<style scoped>
</style>
