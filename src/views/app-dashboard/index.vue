<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>
    <!-- 卡片暂时这么处理一下，一会儿改成创享堆的卡片 -->
    <v-container fluid class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
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

  @Component({
    name: 'AppDashboard',
    components: {},
  })
  export default class AppDashboard extends Vue {
    public team: any = [{
        name: 'AqingCyan',
        role: 'Web developer',
        avatar: 'https://img2.woyaogexing.com/2019/04/11/1434ade0198c4cb89d90eafd618c8301!400x400.jpeg',
      }, {
        name: 'Aqing',
        role: 'UI desinger',
         avatar: 'https://img2.woyaogexing.com/2019/04/11/505efe51ac3c4c07b54599274ecc37ba!400x400.jpeg',
      }, {
        name: 'Xuekaiqi',
        role: 'Porject Manger',
        avatar: 'https://img2.woyaogexing.com/2019/04/11/95e5247c36af48c48d777ef393b706be!400x400.jpeg',
      }, {
        name: 'Cyan',
        role: 'BC developer',
        avatar: 'https://img2.woyaogexing.com/2019/04/11/271302eda92848828f839c4ad660ead9!400x400.jpeg',
      }, {
        name: 'WangTing',
        role: 'UI desinger',
        avatar: 'https://img2.woyaogexing.com/2019/04/11/27a7517dd10a4ae6856b7626359f9842!400x400.jpeg',
    }]
  }
</script>

<style scoped>
</style>
