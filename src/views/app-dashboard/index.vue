<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>
    <!-- 卡片暂时这么处理一下，一会儿改成创享堆的卡片 -->
    <v-container fluid class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in testDeveloper" :key="person.name">
          <dashboard-card></dashboard-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang='ts'>
  import { Component, Vue } from 'vue-property-decorator'
  import { TestDeveloperItem } from '@/model/experiment.ts'
  import { getTestDeveloper } from '@/api/experiment.ts'
  import DashboardCard from './dashboard-card.vue'

  @Component({
    name: 'AppDashboard',
    components: { DashboardCard },
  })
  export default class AppDashboard extends Vue {
    public testDeveloper: TestDeveloperItem[] = []

    public created() {
      this.getTestDeveloper()
    }

    public async getTestDeveloper() {
      this.testDeveloper = await getTestDeveloper()
    }
  }
</script>

<style scoped>
</style>
