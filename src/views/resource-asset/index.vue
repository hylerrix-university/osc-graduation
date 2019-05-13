<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>金融资产管理</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="editItem()">新增资产</v-btn>
    </v-toolbar>
    <edit-dialog
      v-model="dialog"
      :editedIndex="editedIndex"
      :item="editedItem"
      @close-dialog="onDialogClose"
    ></edit-dialog>
    <v-data-table
      :headers="headers"
      :items="assertList"
      class="elevation-1"
      disable-initial-sort
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.count }}</td>
        <td>{{ props.item.unit }}</td>
        <td>{{ props.item.time }}</td>
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
  import { getAssertList } from '@/api/assert'

  import { AssertItem } from '@/model/assert'

  @Component({
    name: 'ResourceAssert',
    components: {
      EditDialog,
    },
  })
  export default class ResourceAssert extends Vue {
    public dialog: boolean = false
    public editedIndex: number = -1
    public editedItem: any = {}
    public assertList: AssertItem[] = []
    public headers = [
      { text: '赞助编号', sortable: true, value: 'id' },
      { text: '赞助数量', sortable: true, value: 'count' },
      { text: '赞助单位', sortable: true, value: 'unit' },
      { text: '赞助时间', sortable: true, value: 'time' },
      { text: '操作', sortable: false, value: '' },
    ]

    public created() {
      this.getAssertList().then()
    }

    public async getAssertList() {
      const { data } = await getAssertList()
      this.assertList = data
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
      this.editedIndex = this.assertList.indexOf(editedItem)
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

