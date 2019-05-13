<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>社区讲师管理</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="editItem()">新增讲师</v-btn>
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
          v-for="lector in lectorList"
          :key="lector.id"
          class="pa-2"
        >
          <v-toolbar dense>
            <v-spacer></v-spacer>
            <v-btn small>编辑讲师</v-btn>
          </v-toolbar>
          <lector-card
            :lector="lector"
          ></lector-card>
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
  import LectorCard from './lector-card.vue'
  import { getLectorList } from '@/api/lector'
  import EditDialog from './edit-dialog.vue'

  import { NavItem } from '@/model/common/nav'
  import { LectorItem } from '@/model/lector'
  import { namespace } from 'vuex-class'
  const Nav = namespace('nav')

  @Component({
    name: 'InternalLector',
    components: {
      LectorCard,
      EditDialog,
    },
  })
  export default class InternalLector extends Vue {
    @Nav.State('list') public navList!: NavItem[]
    public lectorList: LectorItem[] = []
    public dialog: boolean = false
    public editedIndex: number = -1
    public editedItem: any = {}
    public headers = [
      { text: '节点名称', sortable: true, value: 'name' },
      { text: '节点路径', sortable: true, value: 'path' },
      { text: '节点编号', sortable: true, value: 'code' },
    ]

    public created() {
      this.getLectorList()
    }

    public async getLectorList() {
      const { data } = await getLectorList()
      this.lectorList = data
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
      this.editedIndex = this.lectorList.indexOf(editedItem)
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

