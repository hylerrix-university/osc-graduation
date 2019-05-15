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
      @save-dialog="onDialogSave"
    ></edit-dialog>
    <v-container>
      <v-layout row wrap>
        <v-flex
          xs4
          v-for="lector in lectorList"
          :key="lector.id"
          class="pa-2"
        >
          <v-toolbar dense>
            <v-spacer></v-spacer>
            <v-btn small @click="editItem(lector)">编辑</v-btn>
            <v-btn small @click="deleteItem(lector)">删除</v-btn>
          </v-toolbar>
          <person-card
            :person="lector"
          ></person-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  import EditDialog from './edit-dialog.vue'
  import PersonCard from '@/components/person/person-card.vue'
  import { createLector, deleteLector } from '@/api/lector'

  import { NavItem } from '@/model/nav'
  import { LectorItem } from '@/model/lector'
  import { namespace } from 'vuex-class'

  const Nav = namespace('nav')
  const Lector = namespace('lector')

  @Component({
    name: 'CoreLector',
    components: {
      EditDialog,
      PersonCard,
    },
  })
  export default class CoreLector extends Vue {
    @Nav.State('list') public navList!: NavItem[]
    @Lector.State('list') public lectorList!: LectorItem[]
    @Lector.Action public setLectorList!: any
    public dialog: boolean = false
    public editedIndex: number = -1
    public editedItem: any = {}
    public headers = [
      { text: '用户名', sortable: true, value: 'username' },
      { text: '密码', sortable: true, value: 'password' },
      { text: '邮箱', sortable: true, value: 'email' },
      { text: '昵称', sortable: true, value: 'nickname' },
      { text: '姓名', sortable: true, value: 'sex' },
      { text: '电话', sortable: true, value: 'phone' },
      { text: 'Github', sortable: true, value: 'github' },
      // { text: '头像', sortable: true, value: 'avatar' },
      { text: '登录次数', sortable: true, value: 'count' },
      { text: '封禁状态', sortable: false, value: 'status' },
      { text: '操作', sortable: false, value: '' },
    ]

    public created() {
      this.setLectorList().then()
    }

    public async onDialogSave(editedItem: any) {
      try {
        await createLector(editedItem)
        await this.setLectorList().then(() => {
          this.dialog = false
        })
      } catch {
        alert('保存失败，请联系管理员！')
      }
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

    public async deleteItem(item: any) {
      const isDelete = confirm(`确认删除 ${ item.username }？`)
      if (!isDelete) { return }
      try {
        const { data } = await deleteLector(item.id)
        await this.setLectorList().then(() => {
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

