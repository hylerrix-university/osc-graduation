<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>社区活动管理</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="editItem()">新增活动</v-btn>
    </v-toolbar>
    <edit-dialog
      v-model="dialog"
      :editedIndex="editedIndex"
      :item="editedItem"
      @save-dialog="onDialogSave"
    ></edit-dialog>
    <v-container>
      <v-layout row wrap>
        <v-flex
          xs6
          v-for="activity in activityList"
          :key="activity.id"
          class="pa-2"
        >
          <v-toolbar dense>
            <v-spacer></v-spacer>
            <v-btn small @click="editItem(activity)">编辑</v-btn>
            <v-btn small @click="deleteItem(activity)">删除</v-btn>
          </v-toolbar>
          <activity-card
            :activity="activity"
          ></activity-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  import ActivityCard from './activity-card.vue'
  import { getActivityList } from '@/api/activity'
  import EditDialog from './edit-dialog.vue'
  import { createActivity, deleteActivity } from '@/api/activity'

  import { NavItem } from '@/model/nav'
  import { ActivityItem } from '@/model/activity'
  import { namespace } from 'vuex-class'
  const Nav = namespace('nav')

  @Component({
    name: 'ServiceActivity',
    components: {
      ActivityCard,
      EditDialog,
    },
  })
  export default class ServiceActivity extends Vue {
    @Nav.State('list') public navList!: NavItem[]
    public activityList: ActivityItem[] = []
    public dialog: boolean = false
    public editedIndex: number = -1
    public editedItem: any = {}
    public headers = [
      { text: '节点名称', sortable: true, value: 'name' },
      { text: '节点路径', sortable: true, value: 'path' },
      { text: '节点编号', sortable: true, value: 'code' },
    ]

    public created() {
      this.getActivityList()
    }

    public async getActivityList() {
      const { data } = await getActivityList()
      this.activityList = data
    }

    public addItem() {
      this.editedItem = {}
      this.editedIndex = -1
      this.dialog = true
    }

    public editItem(editedItem: any) {
      this.editedIndex = this.activityList.indexOf(editedItem)
      this.editedItem = editedItem
      this.dialog = true
    }

    public async onDialogSave(editedItem: any) {
      try {
        await createActivity(editedItem)
        await this.getActivityList().then(() => {
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
        await deleteActivity(item.id)
        await this.getActivityList().then(() => {
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

