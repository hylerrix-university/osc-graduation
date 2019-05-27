<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>社区项目管理</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="editItem()">新增项目</v-btn>
    </v-toolbar>
    <edit-dialog
      v-model="dialog.item"
      :editedItem="editedItem"
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
          xs4
          v-for="project in projectList"
          :key="project.id"
          class="pa-2"
        >
          <v-toolbar dense>
            <v-spacer></v-spacer>
            <v-btn small @click="relateItem(project)">分配</v-btn>
            <v-btn small @click="editItem(project)">编辑</v-btn>
            <v-btn small @click="deleteItem(project)">删除</v-btn>
          </v-toolbar>
          <project-card
            :project="project"
          ></project-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  import ProjectCard from './project-card.vue'
  import EditDialog from './edit-dialog.vue'
  import RelateDialog from '@/components/person/relate-dialog.vue'
  import { getProjectList, createProject, deleteProject, relateAdmin } from '@/api/project'

  import { NavItem } from '@/model/nav'
  import { ProjectItem } from '@/model/project'
  import { namespace } from 'vuex-class'
  const Nav = namespace('nav')

  @Component({
    name: 'ServiceProject',
    components: {
      ProjectCard,
      EditDialog,
      RelateDialog,
    },
  })
  export default class ServiceProject extends Vue {
    @Nav.State('list') public navList!: NavItem[]
    public projectList: ProjectItem[] = []
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
      this.getProjectList()
    }

    public async getProjectList() {
      const { data } = await getProjectList()
      this.projectList = data
    }

    public editItem(editedItem: any) {
      this.editedIndex = this.projectList.indexOf(editedItem)
      this.editedItem = editedItem
      this.dialog.item = true
    }

    public relateItem(editedRelate: any) {
      this.editedIndex = this.projectList.indexOf(editedRelate)
      this.editedRelate = editedRelate
      this.dialog.relate = true
    }

    public async onDialogSave(editedItem: any) {
      try {
        await createProject(editedItem)
        await this.getProjectList().then(() => {
          this.dialog = false
        })
      } catch {
        alert('保存失败，请联系管理员！')
      }
      this.editedIndex = -1
    }

    public async onRelateSave(projectId: number, adminIds: number[]) {
      try {
        await relateAdmin(projectId, adminIds)
        await this.getProjectList()
        this.dialog.relate = false
      } catch {
        alert('分配失败，请联系管理员！')
      }
    }

    public async deleteItem(item: any) {
      const isDelete = confirm(`确认删除 ${ item.name }？`)
      if (!isDelete) { return }
      try {
        const { data } = await deleteProject(item.id)
        await this.getProjectList().then(() => {
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

