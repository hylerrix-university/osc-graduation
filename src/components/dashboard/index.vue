<template>
  <div class="view">
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs4>
          <dashboard :title="title[0]"></dashboard>
        </v-flex>
        <v-flex xs4>
          <dashboard :title="title[1]"></dashboard>
        </v-flex>
        <v-flex xs4>
          <dashboard :title="title[2]"></dashboard>
        </v-flex>
        <v-flex xs4>
          <dashboard></dashboard>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import Dashboard from '@/components/dashboard/dashboard.vue'

  @Component({
    components: {
      Dashboard,
    },
  })
  export default class DashboardView extends Vue {
    public title: string[] = ['内部交流中心', '用户行为日志', '平台操作日志']
  }
</script>

<style scoped>

</style>
