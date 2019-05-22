<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>入驻单位管理</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="editItem()">新增单位</v-btn>
    </v-toolbar>
    <edit-dialog
      v-model="dialog"
      :editedIndex="editedIndex"
      :item="editedItem"
      @save-dialog="onDialogSave"
    ></edit-dialog>
    <v-data-table
      :headers="headers"
      :items="unitList"
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
  import { getUnitList, createUnit, deleteUnit } from '@/api/unit'

  import { UnitItem } from '@/model/unit'

  @Component({
    name: 'InternalUnit',
    components: {
      EditDialog,
    },
  })
  export default class InternalUnit extends Vue {
    public dialog: boolean = false
    public editedIndex: number = -1
    public editedItem: any = {}
    public unitList: UnitItem[] = []
    public headers = [
      { text: '单位编号', sortable: true, value: 'id' },
      { text: '单位名称', sortable: true, value: 'name' },
      { text: '备注', sortable: true, value: 'remark' },
      { text: '操作', sortable: false, value: '' },
    ]

    public created() {
      this.getUnitList().then()
    }

    public async getUnitList() {
      const { data } = await getUnitList()
      this.unitList = data
    }

    public addItem() {
      this.editedItem = {}
      this.editedIndex = -1
      this.dialog = true
    }

    public editItem(editedItem: any) {
      this.editedIndex = this.unitList.indexOf(editedItem)
      this.editedItem = editedItem
      this.dialog = true
    }

    public async onDialogSave(editedItem: any) {
      try {
        await createUnit(editedItem)
        await this.getUnitList().then(() => {
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
        const { data } = await deleteUnit(item.id)
        await this.getUnitList().then(() => {
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

