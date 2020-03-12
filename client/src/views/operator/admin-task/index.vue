<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>个人任务管理</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn @click="editItem()">新增报告</v-btn> -->
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="taskList"
      class="elevation-1"
      disable-initial-sort
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.remark }}</td>
        <td>
          <v-icon small class="mr-2" @click="exitTask(props.item)">
            exit_to_app
          </v-icon>
        </td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  import { getTaskList, createTask, deleteTask } from '@/api/task'

  import { TaskItem } from '@/model/task'

  @Component({
    name: 'AdminTask',
    components: {},
  })
  export default class AdminTask extends Vue {
    public taskList: TaskItem[] = []
    public headers = [
      { text: '报告编号', sortable: true, value: 'id' },
      { text: '报告名称', sortable: true, value: 'name' },
      { text: '备注', sortable: true, value: 'remark' },
      { text: '操作', sortable: false, value: '' },
    ]

    public created() {
      this.getTaskList().then()
    }

    public async getTaskList() {
      const { data } = await getTaskList()
      this.taskList = data
    }

    public async exitTask() {
      console.log('exitTask')
    }
  }
</script>

<style scoped>
</style>

