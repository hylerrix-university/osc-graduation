<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>平台导航一栏</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="navList"
      class="elevation-1"
      hide-actions
      disable-initial-sort
    >
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.path }}</td>
        <td>{{ getStatusName(props.item.status) }}</td>
        <td>{{ props.item.description }}</td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  import { NavStatus } from '@/config/nav'

  import { NavItem } from '@/model/nav'
  import { namespace } from 'vuex-class'
  const Nav = namespace('nav')

  @Component({
    name: 'NavShow',
    components: {},
  })
  export default class NavShow extends Vue {
    @Nav.State('list') public navList!: NavItem[]

    public headers = [
      { text: '节点名称', sortable: true, value: 'name' },
      { text: '节点路径', sortable: true, value: 'path' },
      { text: '节点编号', sortable: true, value: 'code' },
      { text: '节点状态', sortable: false, value: 'status' },
      { text: '节点备注', sortable: false, value: 'description' },
    ]

    public getStatusName(status: string) {
      return NavStatus[status]
    }
  }
</script>

<style scoped>
</style>
