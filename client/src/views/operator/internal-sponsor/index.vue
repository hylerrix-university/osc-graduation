<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>社区赞助管理</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat @click="editItem()">新增赞助</v-btn>
    </v-toolbar>
    <edit-dialog
      v-model="dialog"
      :editedIndex="editedIndex"
      :item="editedItem"
      @save-dialog="onDialogSave"
    ></edit-dialog>
    <v-data-table
      :headers="headers"
      :items="sponsorList"
      class="elevation-1"
      disable-initial-sort
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.time }}</td>
        <td>{{ props.item.type ? '实体物资' : '金融资产' }}</td>
        <td>{{ props.item.content }}</td>
        <td>{{ props.item.unit }}</td>
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
  import { getSponsorList, createSponsor, deleteSponsor } from '@/api/sponsor'

  import { SponsorItem } from '@/model/sponsor'

  @Component({
    name: 'InternalSponsor',
    components: {
      EditDialog,
    },
  })
  export default class InternalSponsor extends Vue {
    public sponsorList: SponsorItem[] = []
    public dialog: boolean = false
    public editedIndex: number = -1
    public editedItem: any = {}
    public headers = [
      { text: '赞助时间', sortable: true, value: 'time' },
      { text: '赞助类型', sortable: true, value: 'type' },
      { text: '赞助内容', sortable: true, value: 'content' },
      { text: '赞助单位', sortable: true, value: 'unit' },
      { text: '操作', sortable: true, value: '' },
    ]

    public created() {
      this.getSponsorList()
    }

    public async getSponsorList() {
      const { data } = await getSponsorList()
      this.sponsorList = data
    }

    public addItem() {
      this.editedItem = {}
      this.editedIndex = -1
      this.dialog = true
    }

    public editItem(editedItem: any) {
      this.editedIndex = this.sponsorList.indexOf(editedItem)
      this.editedItem = editedItem
      this.dialog = true
    }

    public async onDialogSave(editedItem: any) {
      try {
        await createSponsor(editedItem)
        await this.getSponsorList().then(() => {
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
        const { data } = await deleteSponsor(item.id)
        await this.getSponsorList().then(() => {
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

