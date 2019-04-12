<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>
    <!-- 卡片暂时这么处理一下，一会儿改成创享堆的卡片 -->
    <v-container fluid class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in testDeveloper" :key="person.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left>message</v-icon>
                <span>message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang='ts'>
  import { Component, Vue } from 'vue-property-decorator'
  import { TestDeveloperItem } from '@/model/experiment.ts'
  import { getTestDeveloper } from '@/api/experiment.ts'

  @Component({
    name: 'AppDashboard',
    components: {},
  })
  export default class AppDashboard extends Vue {
    public testDeveloper: TestDeveloperItem[] = []

    created() {
      this.getTestDeveloper()
    }

    async getTestDeveloper() {
      this.testDeveloper = await getTestDeveloper()
    }
  }
</script>

<style scoped>
</style>
