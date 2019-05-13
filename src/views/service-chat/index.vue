<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>社区群聊管理</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="editItem()">新增群聊</v-btn>
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
          v-for="chat in chatList"
          :key="chat.id"
          class="pa-2"
        >
          <v-toolbar dense>
            <v-spacer></v-spacer>
            <v-btn small>编辑群聊</v-btn>
          </v-toolbar>
          <chat-card
            :chat="chat"
          ></chat-card>
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
  import ChatCard from './chat-card.vue'
  import { getChatList } from '@/api/chat'
  import EditDialog from './edit-dialog.vue'

  import { NavItem } from '@/model/nav'
  import { ChatItem } from '@/model/chat'
  import { namespace } from 'vuex-class'
  const Nav = namespace('nav')

  @Component({
    name: 'ServiceChat',
    components: {
      ChatCard,
      EditDialog,
    },
  })
  export default class ServiceChat extends Vue {
    @Nav.State('list') public navList!: NavItem[]
    public chatList: ChatItem[] = []
    public dialog: boolean = false
    public editedIndex: number = -1
    public editedItem: any = {}
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

    public onDialogClose() {
      this.editedIndex = -1
    }

    public addItem() {
      this.editedItem = {}
      this.editedIndex = -1
      this.dialog = true
    }

    public editItem(editedItem: any) {
      this.editedIndex = this.chatList.indexOf(editedItem)
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

