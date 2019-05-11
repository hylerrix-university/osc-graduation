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
    <v-toolbar flat>
      <v-toolbar-title>社区场地管理</v-toolbar-title>
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
  import { namespace } from 'vuex-class'
  const Nav = namespace('nav')

  @Component({
    name: 'OperateDeploy',
    components: {},
  })
  export default class OperateDeploy extends Vue {
    @Nav.State('list') public navList!: NavItem[]

    public headers = [
      { text: '节点名称', sortable: true, value: 'name' },
      { text: '节点路径', sortable: true, value: 'path' },
      { text: '节点编号', sortable: true, value: 'code' },
    ]
    public search: string = ''
  }
</script>

<style scoped>
</style>


