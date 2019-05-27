<template>
  <v-card>
    <v-card-title primary-title>
      项目名称：{{ project.name }}
    </v-card-title>
    <v-card-text>
      <p>所属平台：{{ project.type }}</p>
      <p>项目状态：{{ project.status ? '开发中' : '已上线' }}</p>
      <p>备注：{{ project.remark }}</p>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-text>
      相关人员：{{ project.admins.map((admin) => admin.username) }}
    </v-card-text>
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  import { ProjectItem } from '@/model/project'

  @Component({
    name: 'ProjectCard',
    components: {},
  })
  export default class ProjectCard extends Vue {
    @Prop() public project!: ProjectItem
  }
</script>

<style scoped>
</style>
