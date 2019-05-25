<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>实体物资管理</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="editItem()">新增物资</v-btn>
    </v-toolbar>
    <edit-dialog
      v-model="dialog"
      :editedIndex="editedIndex"
      :item="editedItem"
      @save-dialog="onDialogSave"
    ></edit-dialog>
    <v-data-table
      :headers="headers"
      :items="entityList"
      class="elevation-1"
      disable-initial-sort
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.name }}</td>
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
  import { getEntityList, createEntity, deleteEntity } from '@/api/entity'

  import { EntityItem } from '@/model/entity'

  @Component({
    name: 'ResourceEntity',
    components: {
      EditDialog,
    },
  })
  export default class ResourceEntity extends Vue {
    public dialog: boolean = false
    public editedIndex: number = -1
    public editedItem: any = {}
    public entityList: EntityItem[] = []
    public headers = [
      { text: '赞助编号', sortable: true, value: 'id' },
      { text: '赞助物品', sortable: true, value: 'name' },
      { text: '赞助数量', sortable: true, value: 'count' },
      { text: '赞助单位', sortable: true, value: 'unit' },
      { text: '赞助时间', sortable: true, value: 'time' },
      { text: '操作', sortable: false, value: '' },
    ]

    public created() {
      this.getEntityList().then()
    }

    public async getEntityList() {
      const { data } = await getEntityList()
      this.entityList = data
    }

    public addItem() {
      this.editedItem = {}
      this.editedIndex = -1
      this.dialog = true
    }

    public editItem(editedItem: any) {
      this.editedIndex = this.entityList.indexOf(editedItem)
      this.editedItem = editedItem
      this.dialog = true
    }

    public async onDialogSave(editedItem: any) {
      try {
        await createEntity(editedItem)
        await this.getEntityList().then(() => {
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
        const { data } = await deleteEntity(item.id)
        await this.getEntityList().then(() => {
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

