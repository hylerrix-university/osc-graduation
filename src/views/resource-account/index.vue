<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>虚拟账号管理</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="editItem()">新增账号</v-btn>
    </v-toolbar>
    <edit-dialog
      v-model="dialog"
      :editedIndex="editedIndex"
      :item="editedItem"
      @close-dialog="onDialogClose"
    ></edit-dialog>
    <v-data-table
      :headers="headers"
      :items="accountList"
      class="elevation-1"
      disable-initial-sort
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.platform }}</td>
        <td>{{ props.item.account }}</td>
        <td>{{ props.item.password }}</td>
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
  import { getAccountList } from '@/api/account'

  import { AccountItem } from '@/model/account'

  @Component({
    name: 'ResourceAccount',
    components: {
      EditDialog,
    },
  })
  export default class ResourceAccount extends Vue {
    public dialog: boolean = false
    public editedIndex: number = -1
    public editedItem: any = {}
    public accountList: AccountItem[] = []
    public headers = [
      { text: '账号编号', sortable: true, value: 'id' },
      { text: '所属平台', sortable: true, value: 'platform' },
      { text: '账号名称', sortable: true, value: 'account' },
      { text: '账号密码', sortable: true, value: 'password' },
      { text: '账号备注', sortable: true, value: 'remark' },
      { text: '操作', sortable: false, value: '' },
    ]

    public created() {
      this.getAccountList().then()
    }

    public async getAccountList() {
      const { data } = await getAccountList()
      this.accountList = data
    }

    public onDialogClose() {
      this.editedIndex = -1
    }

    public addItem() {
      this.editedItem = {}
      this.editedIndex = -1
      this.dialog = true
    }

    public editItem(editedItem: any) {
      this.editedIndex = this.accountList.indexOf(editedItem)
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

