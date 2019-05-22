<template>
  <v-card-text class="pt-0 mt-0">
    <v-layout>
      <v-btn small color="primary" @click="editRole">新增角色</v-btn>
      <edit-role 
        v-model="dialog.role"
        @save-dialog="onDialogRoleSave"
        :editedItem="editedRole"
        :editedIndex='editedIndex'
      ></edit-role>
      <edit-admin 
        v-model="dialog.admin"
        @save-dialog="onDialogAdminSave"
        :editedItem="editedAdmin"
        :editedIndex='editedIndex'
      ></edit-admin>
      <edit-nav 
        v-model="dialog.nav"
        @save-dialog="onDialogNavSave"
        :editedItem="editedNav"
        :editedIndex='editedIndex'
      ></edit-nav>
    </v-layout>
    <!-- <v-progress-linear v-if="loading.table" :indeterminate="loading.table"></v-progress-linear> -->
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
              <h4>{{ props.item.name }} - <span>{{ props.item.status ? '开启' : '失效' }}</span></h4>
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
              <p class="remark">拥有成员：{{ props.item.admins }}</p>
              <!-- <username-tooltip
                v-for="(name, j) in props.item.usernames.split(',')" :key="j"
                :username="name">
              </username-tooltip> -->
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="pl-0 ma-0">
              <p class="remark">功能权限：{{ props.item.menus }}</p>
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
  import EditNav from './edit-nav.vue'

  import { RoleItem } from '@/model/role'
  import { namespace } from 'vuex-class'
  const Role = namespace('role')

  @Component({
    name: 'AuthManage',
    components: {
      UsernameTooltip,
      EditRole,
      EditAdmin,
      EditNav,
    },
  })
  export default class AuthManage extends Vue {
    @Role.State('list') public roleList!: RoleItem[]
    public loading = {
      table: false,
    }
    public dialog = {
      role: false,
      admin: false,
      nav: false,
    }
    public editedIndex = -1
    // filteredUsernames: string[] = []
    public editedRole = {}
    public editedAdmin = {}
    public editedNav = {}
    // foundName: string = ''

    // get noDataText() {
    //   return this.loading.table ? '正在加载数据' : '没有相关数据'
    // }

    public async onDialogRoleSave() {
      this.editedIndex = -1
      this.editedRole = Object.assign({}, {})
      this.dialog.role = false
      // await this.getMasterByProductTree()
    }

    public async onDialogAdminSave() {
      this.editedIndex = -1
      this.editedAdmin = Object.assign({}, {})
      this.dialog.admin = false
      // await this.getMasterByProductTree()
    }

    public async onDialogNavSave() {
      this.editedIndex = -1
      this.editedNav = Object.assign({}, {})
      this.dialog.nav = false
      // await this.getMasterByProductTree()
    }

    public editRole(item: RoleItem) {
      this.editedIndex = item ? this.roleList.indexOf(item) : -1
      this.editedRole = Object.assign({}, item)
      this.editedIndex = -1
      this.dialog.role = true
    }

    public editAdmin(item: any) {
      // this.editedIndex = item ? this.roleList.indexOf(item) : -1
      // this.editedAdmin = Object.assign({}, item)
      // this.editedIndex = -1
      this.dialog.admin = true
    }

    public editNav(item: any) {
      // this.editedIndex = item ? this.roleList.indexOf(item) : -1
      // this.editedNav = Object.assign({}, item)
      // this.editedIndex = -1
      this.dialog.nav = true
    }

    public async deleteItem(item: any) {
      this.loading.table = true
      console.log(item)
      // const formData: BatchMasterUserItem = {
      //   id: this.node.id,
      // }
      // try {
      //   const result: any = await batchMasterUser(formData)
      //   alert(result.msg)
      // } catch (e) {
      //   alert('请求失败，或您没有操作权限!')
      // }
      this.loading.table = false
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