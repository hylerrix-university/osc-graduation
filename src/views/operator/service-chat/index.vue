<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>社区群聊管理</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="editItem()">新增群聊</v-btn>
    </v-toolbar>
    <edit-dialog
      v-model="dialog.item"
      :item="editedItem"
      :editedIndex="editedIndex"
      @save-dialog="onDialogSave"
    ></edit-dialog>
    <relate-dialog
      v-model="dialog.relate"
      :editedItem="editedRelate"
      :editedIndex="editedIndex"
      @save-dialog="onRelateSave"
    ></relate-dialog>
    <v-container>
      <v-layout row wrap>
        <v-flex
          xs6
          v-for="chat in chatList"
          :key="chat.id"
          class="pa-2"
        >
          <v-toolbar dense>
            <v-spacer></v-spacer>
            <v-btn small @click="relateItem(chat)">分配</v-btn>
            <v-btn small @click="editItem(chat)">编辑</v-btn>
            <v-btn small @click="deleteItem(chat)">删除</v-btn>
          </v-toolbar>
          <chat-card
            :chat="chat"
          ></chat-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  import ChatCard from './chat-card.vue'
  import EditDialog from './edit-dialog.vue'
  import RelateDialog from '@/components/person/relate-dialog.vue'
  import { getChatList, createChat, deleteChat } from '@/api/chat'
  import { relateAdmin } from '@/api/chat'

  import { NavItem } from '@/model/nav'
  import { ChatItem } from '@/model/chat'
  import { namespace } from 'vuex-class'
  const Nav = namespace('nav')

  @Component({
    name: 'ServiceChat',
    components: {
      ChatCard,
      EditDialog,
      RelateDialog,
    },
  })
  export default class ServiceChat extends Vue {
    @Nav.State('list') public navList!: NavItem[]
    public chatList: ChatItem[] = []
    public dialog: any = {
      item: false,
      relate: false,
    }
    public editedIndex: number = -1
    public editedItem: any = {}
    public editedRelate: any = {}
    public headers = [
      { text: '节点名称', sortable: true, value: 'name' },
      { text: '节点路径', sortable: true, value: 'path' },
      { text: '节点编号', sortable: true, value: 'code' },
    ]

    public created() {
      this.getChatList()
    }

    public async getChatList() {
      const { data } = await getChatList()
      this.chatList = data
    }

    public addItem() {
      this.editedItem = {}
      this.editedIndex = -1
      this.dialog.item = true
    }

    public editItem(editedItem: any) {
      this.editedIndex = this.chatList.indexOf(editedItem)
      this.editedItem = editedItem
      this.dialog.item = true
    }

    public relateItem(editedItem: any) {
      this.editedIndex = this.chatList.indexOf(editedItem)
      this.editedRelate = editedItem
      this.dialog.relate = true
    }

    public async onDialogSave(editedItem: any) {
      try {
        await createChat(editedItem)
        await this.getChatList()
        this.dialog.item = false
      } catch {
        alert('保存失败，请联系管理员！')
      }
      this.editedIndex = -1
    }

    public async onRelateSave(chatId: number, adminIds: number[]) {
      try {
        await relateAdmin(chatId, adminIds)
        await this.getChatList()
        this.dialog.relate = false
      } catch {
        alert('分配失败，请联系管理员！')
      }
    }

    public async deleteItem(item: any) {
      const isDelete = confirm(`确认删除 ${ item.name }？`)
      if (!isDelete) { return }
      try {
        const { data } = await deleteChat(item.id)
        await this.getChatList().then(() => {
          this.dialog.item = false
        })
      } catch {
        alert('删除失败，请联系管理员！')
      }
    }
  }
</script>

<style scoped>
</style>

