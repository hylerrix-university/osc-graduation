<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>社区项目管理</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="editItem()">新增项目</v-btn>
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
          v-for="project in projectList"
          :key="project.id"
          class="pa-2"
        >
          <v-toolbar dense>
            <v-spacer></v-spacer>
            <v-btn small>编辑项目</v-btn>
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
  import { getProjectList } from '@/api/project'
  import EditDialog from './edit-dialog.vue'

  import { NavItem } from '@/model/nav'
  import { ProjectItem } from '@/model/project'
  import { namespace } from 'vuex-class'
  const Nav = namespace('nav')

  @Component({
    name: 'ServiceProject',
    components: {
      ProjectCard,
      EditDialog,
    },
  })
  export default class ServiceProject extends Vue {
    @Nav.State('list') public navList!: NavItem[]
    public projectList: ProjectItem[] = []
    public dialog: boolean = false
    public editedIndex: number = -1
    public editedItem: any = {}
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

    public onDialogClose() {
      this.editedIndex = -1
    }

    public addItem() {
      this.editedItem = {}
      this.editedIndex = -1
      this.dialog = true
    }

    public editItem(editedItem: any) {
      this.editedIndex = this.projectList.indexOf(editedItem)
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

