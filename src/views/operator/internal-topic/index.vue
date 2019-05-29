<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>分享主题管理</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="editItem()">新增主题</v-btn>
    </v-toolbar>
    <edit-dialog
      v-model="dialog.item"
      :editedIndex="editedIndex"
      :item="editedItem"
      @save-dialog="onDialogSave"
    ></edit-dialog>
    <relate-dialog
      v-model="dialog.relate"
      :editedIndex="editedIndex"
      :item="editedRelate"
      @save-dialog="onRelateSave"
    ></relate-dialog>
    <v-data-table
      :headers="headers"
      :items="topicList"
      class="elevation-1"
      disable-initial-sort
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.user ? props.item.user.nickname : '尚未分配' }}</td>
        <td>{{ props.item.activity ? props.item.activity.name : '尚未分配' }}</td>
        <td>{{ props.item.time }}</td>
        <td>
          <v-btn small class="mr-2" @click="relateItem(props.item)">
            分配讲师
          </v-btn>
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
  import RelateDialog from './relate-dialog.vue'
  import { getTopicList, createTopic, deleteTopic, relateLector } from '@/api/topic'

  import { TopicItem } from '@/model/topic'

  @Component({
    name: 'InternalTopic',
    components: {
      EditDialog,
      RelateDialog,
    },
  })
  export default class InternalTopic extends Vue {
    public dialog: any = {
      item: false,
      relate: false,
    }
    public editedIndex: number = -1
    public editedItem: any = {}
    public editedRelate: any = {}
    public topicList: TopicItem[] = []
    public headers = [
      { text: '主题名称', sortable: true, value: 'name' },
      { text: '分享讲师', sortable: true, value: 'user' },
      { text: '所属活动', sortable: true, value: 'activity' },
      { text: '分享时间', sortable: true, value: 'time' },
      { text: '操作', sortable: false, value: '' },
    ]

    public created() {
      this.getTopicList()
    }

    public async getTopicList() {
      const { data } = await getTopicList()
      this.topicList = data
    }

    public editItem(editedItem: any) {
      this.editedIndex = this.topicList.indexOf(editedItem)
      this.editedItem = editedItem
      this.dialog.item = true
    }

    public relateItem(editedItem: any) {
      this.editedIndex = this.topicList.indexOf(editedItem)
      this.editedRelate = editedItem
      this.dialog.relate = true
    }

    public async onDialogSave(editedItem: any) {
      try {
        await createTopic(editedItem)
        await this.getTopicList()
        this.dialog.item = false
      } catch {
        alert('保存失败，请联系管理员！')
      }
      this.editedIndex = -1
    }

    public async onRelateSave(topicId: number, lectorId: number) {
      try {
        await relateLector(topicId, lectorId)
        await this.getTopicList()
        this.dialog.relate = false
      } catch {
        alert('关联失败，请联系管理员！')
      }
      this.editedIndex = -1
    }

    public async deleteItem(item: any) {
      const isDelete = confirm(`确认删除 ${ item.name }？`)
      if (!isDelete) { return }
      try {
        const { data } = await deleteTopic(item.id)
        await this.getTopicList()
        this.dialog.item = false
      } catch {
        alert('删除失败，请联系管理员！')
      }
    }
  }
</script>

<style scoped>
</style>

