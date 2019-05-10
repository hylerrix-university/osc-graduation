<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>数据字典 A</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-data-table
      :headers="headers"
      :items="tempNavList"
      class="elevation-1"
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.path }}</td>
      </template>
    </v-data-table>

    <v-toolbar flat>
      <v-toolbar-title>数据字典 B</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    
    <v-data-table
      :headers="headers"
      :items="tempNavList"
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
    name: 'DocDictionary',
    components: {},
  })
  export default class DocDictionary extends Vue {
    @Nav.State('list') public navList!: NavItem[]

    public headers = [
      { text: '节点名称', sortable: true, value: 'name' },
      { text: '节点路径', sortable: true, value: 'path' },
      { text: '节点编号', sortable: true, value: 'code' },
    ]

    public tempNavList: NavItem[] = []

    public created() {
      this.tempNavList.push(this.navList[0])
      this.tempNavList.push(this.navList[1])
      this.tempNavList.push(this.navList[2])
    }
  }
</script>

<style scoped>
</style>

