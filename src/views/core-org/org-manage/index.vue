<template>
  <v-container fluid>
    <edit-dialog
      v-model="dialog"
      :editedIndex="editedIndex"
      :item="editedOrgNode"
      @close-dialog="onDialogClose"
    ></edit-dialog>
    <v-card-title flat>
      <v-layout>
        <v-flex xs3>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="搜索"
            single-line
            hide-details
          ></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
        <v-btn @click="editItem()">新增部门</v-btn>
      </v-layout>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="orgTree"
      :search="search"
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.name }}</td>
        <td>
          <username-tooltip
            v-for="(name, j) in getOwnersNameByIds(props.item.owners).split(',')"
            :key="j"
            :username="name"
          ></username-tooltip>
        </td>
        <td>{{ props.item.descrition }}</td>
        <td>
          <v-icon small class="mr-2" @click="editItem(props.item)">
            edit
          </v-icon>
          <v-icon small @click="deleteItem(props.item)">
            delete
          </v-icon>
        </td>
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          您搜索的 "{{ search }}" 没有匹配到相关结果
        </v-alert>
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang='ts'>
  import { Component, Vue } from 'vue-property-decorator'
  import EditDialog from './edit-dialog.vue'
  import UsernameTooltip from '@/components/username-tooltip.vue'
  
  import { getOwnersNameByIds } from '@/commons/admin'
  import { OrgTreeItem } from '@/model/org'
  import { AdminItem } from '@/model/admin'
  import { namespace } from 'vuex-class'
  const Admin = namespace('admin')
  const Org = namespace('org')

  @Component({
    name: 'OrgManage',
    components: {
      EditDialog,
      UsernameTooltip,
    },
  })
  export default class OrgManage extends Vue {
    @Org.Getter public orgTree!: OrgTreeItem[]
    @Admin.State('list') public adminList!: AdminItem[]

    public headers: any = [
      { text: '部门编号', sortable: false, value: 'id' },
      { text: '部门名称', sortable: false, value: 'name' },
      { text: '负责人', sortable: false, value: 'owners' },
      { text: '部门描述', sortable: false, value: 'description' },
      { text: '操作', sortable: false, value: 'name' },
    ]
    public search: string = ''
    public dialog: boolean = false
    public editedIndex: number = -1
    // BUG: public editedOrgNode!: OrgTreeItem 时，要么初始化时写假数据要么不能初始化报错未定义
    public editedOrgNode: any = {}

    public onDialogClose() {
      this.editedIndex = -1
    }

    public addItem() {
      this.editedOrgNode = {}
      this.editedIndex = -1
      this.dialog = true
    }

    public editItem(editedItem: any) {
      this.editedIndex = this.orgTree.indexOf(editedItem)
      this.editedOrgNode = editedItem
      this.dialog = true
    }

    public deleteItem() {
      console.log('delete')
    }

    public getOwnersNameByIds(owners: string) {
      return getOwnersNameByIds(owners, this.adminList)
    }
  }
</script>

<style scoped>
</style>
