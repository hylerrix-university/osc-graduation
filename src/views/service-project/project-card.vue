<template>
  <v-card>
    <v-card-title primary-title>
      项目名称：{{ project.name }}
    </v-card-title>
    <v-card-text>
      所属平台：{{ project.platform }}
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
