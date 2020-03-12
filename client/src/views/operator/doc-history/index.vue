<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>发展历史管理</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="editItem()">新增历史</v-btn>
    </v-toolbar>
    <edit-dialog
      v-model="dialog"
      :editedIndex="editedIndex"
      :item="editedItem"
      @save-dialog="onDialogSave"
    ></edit-dialog>
    <v-data-table
      :headers="headers"
      :items="historyList"
      class="elevation-1"
      disable-initial-sort
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.name }}</td>
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
  import { getHistoryList, createHistory, deleteHistory } from '@/api/history'

  import { HistoryItem } from '@/model/history'

  @Component({
    name: 'DocHistory',
    components: {
      EditDialog,
    },
  })
  export default class DocHistory extends Vue {
    public dialog: boolean = false
    public editedIndex: number = -1
    public editedItem: any = {}
    public historyList: HistoryItem[] = []
    public headers = [
      { text: '历史编号', sortable: true, value: 'id' },
      { text: '历史名称', sortable: true, value: 'name' },
      { text: '备注', sortable: true, value: 'remark' },
      { text: '操作', sortable: false, value: '' },
    ]

    public created() {
      this.getHistoryList().then()
    }

    public async getHistoryList() {
      const { data } = await getHistoryList()
      this.historyList = data
    }

    public addItem() {
      this.editedItem = {}
      this.editedIndex = -1
      this.dialog = true
    }

    public editItem(editedItem: any) {
      this.editedIndex = this.historyList.indexOf(editedItem)
      this.editedItem = editedItem
      this.dialog = true
    }

    public async onDialogSave(editedItem: any) {
      try {
        await createHistory(editedItem)
        await this.getHistoryList().then(() => {
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
        const { data } = await deleteHistory(item.id)
        await this.getHistoryList().then(() => {
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

