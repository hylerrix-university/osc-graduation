<template>
  <v-card>
    <v-card-title primary-title>
      活动名称：{{ activity.name }}
    </v-card-title>
    <v-card-text>
      举办时间：{{ activity.time }}
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
