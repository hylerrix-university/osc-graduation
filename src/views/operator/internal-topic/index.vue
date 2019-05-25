<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>分享主题管理</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="editItem()">新增主题</v-btn>
    </v-toolbar>
    <edit-dialog
      v-model="dialog"
      :editedIndex="editedIndex"
      :item="editedItem"
      @save-dialog="onDialogSave"
    ></edit-dialog>
    <v-data-table
      :headers="headers"
      :items="topicList"
      class="elevation-1"
      disable-initial-sort
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.time }}</td>
        <td>{{ props.item.user.nickname }}</td>
        <td>{{ props.item.activity.name }}</td>
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
  import { getTopicList, createTopic, deleteTopic } from '@/api/topic'

  import { TopicItem } from '@/model/topic'

  @Component({
    name: 'InternalTopic',
    components: {
      EditDialog,
    },
  })
  export default class InternalTopic extends Vue {
    public dialog: boolean = false
    public editedIndex: number = -1
    public editedItem: any = {}
    public topicList: TopicItem[] = []
    public headers = [
      { text: '主题编号', sortable: true, value: 'id' },
      { text: '主题名称', sortable: true, value: 'name' },
      { text: '分享时间', sortable: true, value: 'time' },
      { text: '分享讲师', sortable: true, value: 'user' },
      { text: '所属活动', sortable: true, value: 'activity' },
      { text: '操作', sortable: false, value: '' },
    ]

    public created() {
      this.getTopicList().then()
    }

    public async getTopicList() {
      const { data } = await getTopicList()
      this.topicList = data
    }

    public addItem() {
      this.editedItem = {}
      this.editedIndex = -1
      this.dialog = true
    }

    public editItem(editedItem: any) {
      this.editedIndex = this.topicList.indexOf(editedItem)
      this.editedItem = editedItem
      this.dialog = true
    }

    public async onDialogSave(editedItem: any) {
      try {
        await createTopic(editedItem)
        await this.getTopicList().then(() => {
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
        const { data } = await deleteTopic(item.id)
        await this.getTopicList().then(() => {
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

