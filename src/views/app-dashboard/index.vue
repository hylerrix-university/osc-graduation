<template>
  <v-container fluid class="pa-0 ma-0">
    <v-layout row wrap>
      <v-flex
        xs4
        v-for="cardInfo in cardInfoList"
        :key="cardInfo.title"
        class="pa-2"
      >
        <little-card :cardInfo="cardInfo"></little-card>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 class="pa-2">
        <card-wrap></card-wrap>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang='ts'>
  import { Component, Vue } from 'vue-property-decorator'
  import LittleCard from './little-card.vue'
  import CardWrap from './card-wrap.vue'

  import { LittleCardItem } from '@/model/dashboard'

  @Component({
    name: 'AppDashboard',
    components: {
      LittleCard,
      CardWrap,
    },
  })
  export default class AppDashboard extends Vue {
    public cardInfoList: LittleCardItem[] = [
      { title: '运营人员', count: '0', unit: '人', icon: '' },
      { title: '管理模块', count: '0', unit: '个', icon: '' },
      { title: '本周操作', count: '0', unit: '次', icon: '' },
    ]
  }
</script>

<style scoped>
</style>
