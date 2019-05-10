<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>社区成员管理</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-data-table
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
    </v-data-table>
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  import { NavItem } from '@/model/common/nav'
  import {namespace} from 'vuex-class'
  const Nav = namespace('nav')

  @Component({
    name: 'ServiceChatThird',
    components: {},
  })
  export default class ServiceChatThird extends Vue {
    @Nav.State('list') public navList!: NavItem[]

    public headers = [
      { text: '节点名称', sortable: true, value: 'name' },
      { text: '节点路径', sortable: true, value: 'path' },
      { text: '节点编号', sortable: true, value: 'code' },
    ]
  }
</script>

<style scoped>
</style>

