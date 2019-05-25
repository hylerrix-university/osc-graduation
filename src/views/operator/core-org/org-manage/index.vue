<template>
  <v-container fluid>
    <edit-dialog
      v-model="dialog"
      :editedIndex="editedIndex"
      :item="editedItem"
      @save-dialog="onDialogSave"
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
        <v-btn @click="editItem()">新增组织</v-btn>
      </v-layout>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="orgTree"
      :search="search"
      :loading="loading"
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.code }}</td>
        <td>{{ props.item.name }}</td>
        <td>
          <username-tooltip
            :username="getOwnerNameByIds(props.item.owner)"
          ></username-tooltip>
        </td>
        <td>{{ props.item.remark }}</td>
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
  import { getOwnerNameByIds } from '@/commons/admin'
  import { createOrg, deleteOrg } from '@/api/org'

  import { OrgItem } from '@/model/org'
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
    @Org.Getter public orgTree!: OrgItem[]
    @Org.Action public setOrgList!: any
    @Org.State public loading!: boolean
    @Admin.State('list') public adminList!: AdminItem[]
    public headers: any = [
      { text: '组织编号', sortable: false, value: 'id' },
      { text: '组织名称', sortable: false, value: 'name' },
      { text: '负责人', sortable: false, value: 'owner' },
      { text: '组织描述', sortable: false, value: 'remark' },
      { text: '操作', sortable: false, value: '' },
    ]
    public search: string = ''
    public dialog: boolean = false
    public editedIndex: number = -1
    // BUG: public editedItem!: OrgItem 时，要么初始化时写假数据要么不能初始化报错未定义
    public editedItem: any = {}

    public async onDialogSave(editedItem: any) {
      // 重构：暂时因为创建和更新很类似，只复用一个新增接口
      // 因此存在一点小的不足之处：返回的状态码都是 201 Created
      // 新增组织、编辑组织复用一个接口
      // if (this.editedIndex === -1) { // 新增 }
      // else { // 编辑 }
      try {
        await createOrg(editedItem)
        await this.setOrgList().then(() => {
          this.dialog = false
        })
      } catch {
        alert('保存失败，请联系管理员！')
      }
    }

    public editItem(editedItem: any) {
      this.editedIndex = this.orgTree.indexOf(editedItem)
      this.editedItem = editedItem
      this.dialog = true
    }

    public async deleteItem(item: any) {
      const isDelete = confirm(`确认删除 ${ item.name }？`)
      if (!isDelete) { return }
      try {
        const { data } = await deleteOrg(item.code)
        await this.setOrgList().then(() => {
          this.dialog = false
        })
      } catch {
        alert('删除失败，请联系管理员！')
      }
    }

    public getOwnerNameByIds(owner: string) {
      const curOwner: any = getOwnerNameByIds(owner, this.adminList)
      return curOwner ? curOwner.username : '暂无负责人'
    }
  }
</script>

<style scoped>
</style>
