<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>运营人员管理</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="editItem()">新增人员</v-btn>
    </v-toolbar>
    <edit-dialog
      v-model="dialog"
      :editedIndex="editedIndex"
      :item="editedItem"
      @close-dialog="onDialogClose"
    ></edit-dialog>
    <v-data-table
      :headers="headers"
      :items="adminList"
      class="elevation-1"
      disable-initial-sort
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.username }}</td>
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

  import { NavItem } from '@/model/common/nav'
  import { AdminItem } from '@/model/admin'
  import { namespace } from 'vuex-class'

  const Nav = namespace('nav')
  const Admin = namespace('admin')

  @Component({
    name: 'CoreAdmin',
    components: {
      EditDialog,
    },
  })
  export default class CoreAdmin extends Vue {
    @Nav.State('list') public navList!: NavItem[]
    @Admin.State('list') public adminList!: AdminItem[]
    public dialog: boolean = false
    public editedIndex: number = -1
    public editedItem: any = {}
    public headers = [
      { text: '用户 ID', sortable: true, value: 'id' },
      { text: '用户名', sortable: true, value: 'username' },
      { text: '操作', sortable: false, value: 'id' },
    ]

    public onDialogClose() {
      this.editedIndex = -1
    }

    public addItem() {
      this.editedItem = {}
      this.editedIndex = -1
      this.dialog = true
    }

    public editItem(editedItem: any) {
      this.editedIndex = this.adminList.indexOf(editedItem)
      this.editedItem = editedItem
      this.dialog = true
    }

    public deleteItem() {
      console.log('delete')
    }
  }
</script>

<style scoped>
</style>

