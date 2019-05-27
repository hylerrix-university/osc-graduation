<template>
  <v-card-text class="pt-0 mt-0">
    <v-layout>
      <v-btn small color="primary" @click="editRole">新增角色</v-btn>
      <edit-role 
        v-model="dialog.role"
        :item="editedRole"
        :editedIndex='editedIndex'
        @save-dialog="onDialogRoleSave"
      ></edit-role>
      <edit-admin 
        v-model="dialog.admin"
        :editedItem="editedAdmin"
        :editedIndex='editedIndex'
        @save-dialog="onDialogAdminSave"
      ></edit-admin>
      <edit-menu
        v-model="dialog.nav"
        :editedItem="editedMenu"
        :editedIndex='editedIndex'
        @save-dialog="onDialogMenuSave"
      ></edit-menu>
    </v-layout>
    <v-progress-linear v-if="loading" :indeterminate="loading"></v-progress-linear>
    <v-data-iterator
      :items="roleList"
      content-tag="v-layout"
      no-data-text="没有相关数据"
      hide-actions
      row
      wrap
    >
      <template v-slot:item="props">
        <v-flex xs12>
          <v-card class="mt-2 mx-2">
            <v-card-title class="my-1">
              <h4>{{ props.item.name }} - <span>{{ props.item.status ? '可用' : '已封' }}</span></h4>
              <v-spacer></v-spacer>
              <v-toolbar-items class="hidden-sm-and-down">
                <v-btn class="mr-2" @click="editRole(props.item)">编辑角色</v-btn>
                <v-btn class="mr-2" @click="editAdmin(props.item)">分配人员</v-btn>
                <v-btn class="mr-2" @click="editNav(props.item)">分配导航</v-btn>
                <v-btn class="mr-2" @click="deleteItem(props.item)">删除</v-btn>
              </v-toolbar-items>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="pl-0 ma-0">
              <p class="remark">备注：{{ props.item.remark }}</p>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="pl-0 ma-0">
              <p class="remark">拥有成员：{{ props.item.admins.map((admin) => admin.username) }}</p>
              <!-- <username-tooltip
                v-for="(name, j) in props.item.usernames.split(',')" :key="j"
                :username="name">
              </username-tooltip> -->
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="pl-0 ma-0">
              <p class="remark">功能权限：{{ props.item.menus.map((menu) => `${menu.name}-(${menu.code})`) }}</p>
            </v-card-text>
          </v-card>
        </v-flex>
      </template>
      <template v-slot:no-data>
        <v-alert v-if="!roleList" :value="true" color="error" icon="warning">
          没有相关数据
        </v-alert>
      </template>
    </v-data-iterator>
  </v-card-text>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  import UsernameTooltip from '@/components/username-tooltip.vue'
  import EditRole from '../edit-role.vue'
  import EditAdmin from './edit-admin.vue'
  import EditMenu from './edit-menu.vue'
  import { createRole, deleteRole, relateAdmin, relateMenu } from '@/api/role'

  import { RoleItem } from '@/model/role'
  import { namespace } from 'vuex-class'
  const Role = namespace('role')

  @Component({
    name: 'AuthManage',
    components: {
      UsernameTooltip,
      EditRole,
      EditAdmin,
      EditMenu,
    },
  })
  export default class AuthManage extends Vue {
    @Role.State('list') public roleList!: RoleItem[]
    @Role.State public loading!: boolean
    @Role.Action public setRoleList!: any
    public dialog = {
      role: false,
      admin: false,
      nav: false,
    }
    public editedIndex = -1
    // filteredUsernames: string[] = []
    public editedRole = {}
    public editedAdmin = {}
    public editedMenu = {}
    // foundName: string = ''

    // get noDataText() {
    //   return this.loading ? '正在加载数据' : '没有相关数据'
    // }

    public async onDialogRoleSave(editedItem: any) {
      try {
        await createRole(editedItem)
        await this.setRoleList()
      } catch {
        alert('保存失败，请联系管理员！')
      }
      this.editedIndex = -1
    }

    public async onDialogAdminSave(roleId: number, adminIds: number[]) {
      try {
        await relateAdmin(roleId, adminIds)
        await this.setRoleList()
        this.dialog.admin = false
      } catch {
        alert('分配失败，请联系管理员！')
      }
    }

    public async onDialogMenuSave(roleId: number, menuIds: number[]) {
      try {
        await relateMenu(roleId, menuIds)
        await this.setRoleList()
        this.dialog.nav = false
      } catch {
        alert('分配失败，请联系管理员！')
      }
    }

    public editRole(item: RoleItem) {
      this.editedIndex = item ? this.roleList.indexOf(item) : -1
      this.editedRole = Object.assign({}, item)
      this.dialog.role = true
    }

    public editAdmin(item: any) {
      this.editedIndex = item ? this.roleList.indexOf(item) : -1
      this.editedAdmin = Object.assign({}, item)
      this.dialog.admin = true
    }

    public editNav(item: any) {
      this.editedIndex = item ? this.roleList.indexOf(item) : -1
      this.editedMenu = Object.assign({}, item)
      this.dialog.nav = true
    }

    public async deleteItem(item: any) {
      const isDelete = confirm(`确认删除 ${ item.name }？`)
      if (!isDelete) { return }
      try {
        const { data } = await deleteRole(item.id)
        await this.setRoleList()
      } catch {
        alert('删除失败，请联系管理员！')
      }
    }
  }
</script>

<style scoped>
  .td-break-table {
    word-wrap: break-word;
    word-break: break-all;
  }

  .remark {
    margin-left: 20px;
    font-size: 88%;
  }
</style>