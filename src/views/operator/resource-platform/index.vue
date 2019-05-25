<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>社区平台管理</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="editItem()">新增平台</v-btn>
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
          v-for="platform in platformList"
          :key="platform.id"
          class="pa-2"
        >
          <v-toolbar dense>
            <v-spacer></v-spacer>
            <v-btn small @click="editItem(platform)">编辑</v-btn>
            <v-btn small @click="deleteItem(platform)">删除</v-btn>
          </v-toolbar>
          <platform-card
            :platform="platform"
          ></platform-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  import PlatformCard from './platform-card.vue'
  import { getPlatformList, createPlatform, deletePlatform } from '@/api/platform'
  import EditDialog from './edit-dialog.vue'

  import { NavItem } from '@/model/nav'
  import { PlatformItem } from '@/model/platform'
  import { namespace } from 'vuex-class'
  const Nav = namespace('nav')

  @Component({
    name: 'InternalPlatform',
    components: {
      PlatformCard,
      EditDialog,
    },
  })
  export default class InternalPlatform extends Vue {
    @Nav.State('list') public navList!: NavItem[]
    public platformList: PlatformItem[] = []
    public dialog: boolean = false
    public editedIndex: number = -1
    public editedItem: any = {}
    public headers = [
      { text: '节点名称', sortable: true, value: 'name' },
      { text: '节点路径', sortable: true, value: 'path' },
      { text: '节点编号', sortable: true, value: 'code' },
    ]

    public created() {
      this.getPlatformList()
    }

    public async getPlatformList() {
      const { data } = await getPlatformList()
      this.platformList = data
    }

    public addItem() {
      this.editedItem = {}
      this.editedIndex = -1
      this.dialog = true
    }

    public editItem(editedItem: any) {
      this.editedIndex = this.platformList.indexOf(editedItem)
      this.editedItem = editedItem
      this.dialog = true
    }

    public async onDialogSave(editedItem: any) {
      try {
        await createPlatform(editedItem)
        await this.getPlatformList().then(() => {
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
        const { data } = await deletePlatform(item.id)
        await this.getPlatformList().then(() => {
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

