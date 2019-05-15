<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>平台导航管理</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat @click="editItem()">新增导航</v-btn>
    </v-toolbar>
    <edit-dialog
      v-model="dialog"
      :editedIndex="editedIndex"
      :item="editedItem"
      @save-dialog="onDialogSave"
    ></edit-dialog>
    <v-data-table
      :headers="headers"
      :items="navList"
      class="elevation-1"
      disable-initial-sort
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.code }}</td>
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.path }}</td>
        <td>{{ props.item.pid }}</td>
        <td>{{ props.item.isParent ? '是' : '否' }}</td>
        <td>{{ props.item.status === 'CODING' ? '开发中': '设计中' }}</td>
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
    </v-data-table>
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  import EditDialog from './edit-dialog.vue'
  import { createNav, deleteNav } from '@/api/nav'

  import { NavItem } from '@/model/nav'
  import { namespace } from 'vuex-class'
  const Nav = namespace('nav')

  @Component({
    name: 'CoreMenu',
    components: {
      EditDialog,
    },
  })
  export default class CoreMenu extends Vue {
    @Nav.State('list') public navList!: NavItem[]
    @Nav.Action public setNavList!: any
    public dialog: boolean = false
    public editedIndex: number = -1
    public editedItem: any = {}
    public headers = [
      { text: '菜单编号', sortable: true, value: 'code' },
      { text: '菜单名称', sortable: true, value: 'name' },
      { text: '菜单路径', sortable: true, value: 'path' },
      { text: '父节点', sortable: true, value: 'pid' },
      { text: '是否有子节点', sortable: true, value: 'isParent' },
      { text: '菜单状态', sortable: true, value: 'status' },
      { text: '菜单备注', sortable: true, value: 'remark' },
      { text: '操作', sortable: false, value: '' },
    ]

    public async onDialogSave(editedItem: any) {
      try {
        await createNav(editedItem)
        await this.setNavList().then(() => {
          this.dialog = false
        })
      } catch {
        alert('保存失败，请联系管理员！')
      }
      this.editedIndex = -1
    }

    public addItem() {
      this.editedItem = {}
      this.editedIndex = -1
      this.dialog = true
    }

    public editItem(editedItem: any) {
      this.editedIndex = this.navList.indexOf(editedItem)
      this.editedItem = editedItem
      this.dialog = true
    }

    public async deleteItem(item: any) {
      const isDelete = confirm(`确认删除 ${ item.name }？`)
      if (!isDelete) { return }
      try {
        const { data } = await deleteNav(item.id)
        await this.setNavList().then(() => {
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

