<template>
  <v-card>
    <v-card-title>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="搜索..."
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :loading="table.loading"
      :search="search"
      :rows-per-page-text="table.rowsPerPageText"
      :rows-per-page-items="table.rowsPerPageItems"
      class="elevation-1"
    >
      <v-progress-linear v-slot:progress color="blue" indeterminate></v-progress-linear>
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.tableName }}</td>
        <td>{{ props.item.operatePage }}</td>
        <td>{{ props.item.adminName }}</td>
        <td>{{ props.item.type }}</td>
        <td>{{ props.item.time }}</td>
        <td>{{ props.item.status }}</td>
        <td class="justify-center layout px-0">
          <v-icon small>
            <!-- @click="deleteItem(props.item)" -->
            delete
          </v-icon>
        </td>
      </template>
      <template v-slot:no-data>
        <v-alert :value="true" color="error" icon="warning">
          抱歉，暂时没用相关数据
        </v-alert>
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          没有找到包含 "{{ search }}" 的相关结果
        </v-alert>
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue } from 'vue-property-decorator'
  import { OperateLogItem } from '@/model/doc'

  @Component({
    name: 'OperateList',
    components: {},
  })
  export default class OperateList extends Vue {
    public table = {
      loading: true,
      rowsPerPageText: '每行显示:',
      rowsPerPageItems: [10, 25, 50, 100],
    }
    public search: string = ''
    public headers = [
      {
        text: '序号',
        sortable: false,
        value: 'id',
      },
      { text: '表名', value: 'tableName' },
      { text: '业务名称', value: 'operatePage' },
      { text: '操作人', value: 'adminName' },
      { text: '操作类型', value: 'type' },
      { text: '操作时间', value: 'time' },
      { text: '成功状态', value: 'status' },
      { text: '操作', value: 'operate', sortable: false },
    ]
    public desserts: OperateLogItem[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((n) => {
      return {
        id: n,
        tableName: 'menu',
        operatePage: '平台导航管理',
        adminName: 'hylerrix',
        type: '新增',
        time: '2019-04-2' + n,
        status: 'success',
      }
    })
  }
</script>

<style scoped>
</style>
