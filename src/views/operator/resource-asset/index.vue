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
      @save-dialog="onDialogSave"
    ></edit-dialog>
    <v-data-table
      :headers="headers"
      :items="assetList"
      class="elevation-1"
      disable-initial-sort
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.type }}</td>
        <td>{{ props.item.amount }}</td>
        <td>{{ props.item.unit }}</td>
        <td>{{ props.item.adminId }}</td>
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
  import { getAssetList, createAsset, deleteAsset } from '@/api/asset'

  import { AssetItem } from '@/model/asset'

  @Component({
    name: 'ResourceAsset',
    components: {
      EditDialog,
    },
  })
  export default class ResourceAsset extends Vue {
    public dialog: boolean = false
    public editedIndex: number = -1
    public editedItem: any = {}
    public assetList: AssetItem[] = []
    public headers = [
      { text: '记录类型', sortable: true, value: 'type' },
      { text: '金额数量', sortable: true, value: 'amount' },
      { text: '赞助单位', sortable: true, value: 'unit' },
      { text: '负责人', sortable: true, value: 'adminId' },
      { text: '记录时间', sortable: true, value: 'time' },
      { text: '操作', sortable: false, value: '' },
    ]

    public created() {
      this.getAssetList().then()
    }

    public async getAssetList() {
      const { data } = await getAssetList()
      this.assetList = data
    }

    public addItem() {
      this.editedItem = {}
      this.editedIndex = -1
      this.dialog = true
    }

    public editItem(editedItem: any) {
      this.editedIndex = this.assetList.indexOf(editedItem)
      this.editedItem = editedItem
      this.dialog = true
    }

    public async onDialogSave(editedItem: any) {
      try {
        await createAsset(editedItem)
        await this.getAssetList().then(() => {
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
        const { data } = await deleteAsset(item.id)
        await this.getAssetList().then(() => {
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

