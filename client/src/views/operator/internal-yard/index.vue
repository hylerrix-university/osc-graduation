<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>社区场地管理</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="editItem()">新增场地</v-btn>
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
          v-for="yard in yardList"
          :key="yard.id"
          class="pa-2"
        >
          <v-toolbar dense>
            <v-spacer></v-spacer>
            <v-btn small @click="editItem(yard)">编辑</v-btn>
            <v-btn small @click="deleteItem(yard)">删除</v-btn>
          </v-toolbar>
          <yard-card
            :yard="yard"
          ></yard-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  import YardCard from './yard-card.vue'
  import { getYardList, createYard, deleteYard } from '@/api/yard'
  import EditDialog from './edit-dialog.vue'

  import { NavItem } from '@/model/nav'
  import { YardItem } from '@/model/yard'
  import { namespace } from 'vuex-class'
  const Nav = namespace('nav')

  @Component({
    name: 'InternalYard',
    components: {
      YardCard,
      EditDialog,
    },
  })
  export default class InternalYard extends Vue {
    @Nav.State('list') public navList!: NavItem[]
    public yardList: YardItem[] = []
    public dialog: boolean = false
    public editedIndex: number = -1
    public editedItem: any = {}

    public created() {
      this.getYardList()
    }

    public async getYardList() {
      const { data } = await getYardList()
      this.yardList = data
    }

    public addItem() {
      this.editedItem = {}
      this.editedIndex = -1
      this.dialog = true
    }

    public editItem(editedItem: any) {
      this.editedIndex = this.yardList.indexOf(editedItem)
      this.editedItem = editedItem
      this.dialog = true
    }

    public async onDialogSave(editedItem: any) {
      try {
        await createYard(editedItem)
        await this.getYardList().then(() => {
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
        const { data } = await deleteYard(item.id)
        await this.getYardList().then(() => {
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

