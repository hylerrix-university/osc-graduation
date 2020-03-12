<template>
  <v-card>
    <v-card-title primary-title>
      活动名称：{{ activity.name }}
    </v-card-title>
    <v-card-text>
      <p>举办时间：{{ activity.time }}</p>
      <p>活动状态：{{ activity.status }}</p>
      <p>活动备注：{{ activity.remark }}</p>
    </v-card-text>
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  import { ActivityItem } from '@/model/activity'

  @Component({
    name: 'ActivityCard',
    components: {},
  })
  export default class ActivityCard extends Vue {
    @Prop() public activity!: ActivityItem
  }
</script>

<style scoped>
</style>
