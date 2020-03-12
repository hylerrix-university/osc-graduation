<template>
  <v-card>
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
        <v-btn @click="editItem()">新增角色</v-btn>
      </v-layout>
    </v-card-title>
    <edit-role
      v-model="dialog"
      :editedIndex="editedIndex"
      :item="editedItem"
      @save-dialog="onDialogSave"
    ></edit-role>
    <v-data-table
      :headers="headers"
      :items="roleList"
      :search="search"
      class="elevation-1"
      disable-initial-sort
      hide-actions
      :loading="loading"
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.status ? '可用' : '已封' }}</td>
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
  </v-card>
</template>

<script lang="ts">
    import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
    import EditRole from '../edit-role.vue'
    import { createRole, deleteRole } from '@/api/role'

    import { RoleItem } from '@/model/role'
    import { namespace } from 'vuex-class'
    const Role = namespace('role')

    @Component({
        name: 'RoleManage',
        components: {
          EditRole,
        },
    })
    export default class RoleManage extends Vue {
      @Role.State('list') public roleList!: RoleItem[]
      @Role.State public loading!: boolean
      @Role.Action public setRoleList!: any
      public dialog: boolean = false
      public editedIndex: number = -1
      public editedItem: any = {}
      public search: string = ''
      public headers = [
        { text: '权限名称', sortable: true, value: 'name' },
        { text: '权限状态', sortable: true, value: 'status' },
        { text: '权限备注', sortable: true, value: 'remark' },
        { text: '节点操作', sortable: false, value: 'status' },
      ]

      public addItem() {
        this.editedItem = {}
        this.editedIndex = -1
        this.dialog = true
      }

      public editItem(editedItem: any) {
        this.editedIndex = this.roleList.indexOf(editedItem)
        this.editedItem = editedItem
        this.dialog = true
      }

      public async onDialogSave(editedItem: any) {
        try {
          await createRole(editedItem)
          await this.setRoleList().then(() => {
            this.dialog = false
          })
        } catch {
          alert('保存失败，请联系管理员！')
        }
        this.editedIndex = -1
      }

      public async deleteItem(item: any) {
        const isDelete = confirm(`确认删除 ${ item.name }？`)
        if (!isDelete) { return }
        try {
          const { data } = await deleteRole(item.id)
          await this.setRoleList().then(() => {
            this.dialog = false
          })
        } catch {
          alert('删除失败，请联系管理员！')
        }
      }
    }
</script>

<style scoped>
</style>
