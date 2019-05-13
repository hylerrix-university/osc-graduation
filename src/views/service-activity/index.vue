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
      @close-dialog="onDialogClose"
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
            <v-btn small>编辑活动</v-btn>
          </v-toolbar>
          <activity-card
            :activity="activity"
          ></activity-card>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- <v-data-table
      :headers="headers"
      :items="navList"
      class="elevation-1"
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.path }}</td>
      </template>
    </v-data-table> -->
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  import ActivityCard from './activity-card.vue'
  import { getActivityList } from '@/api/activity'
  import EditDialog from './edit-dialog.vue'

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

    public onDialogClose() {
      this.editedIndex = -1
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

    public deleteItem() {
      console.log('delete')
    }
  }
</script>

<style scoped>
</style>

