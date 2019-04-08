<template>
  <div id="dashboard">
    <v-card class="card" dark hover color="purple lighten-1">
      <v-card-title>{{title}}</v-card-title>
      <div class="content">
        <slot></slot>
      </div>
    </v-card>
  </div>
</template>

<script lang='ts'>
import {Component, Prop, Vue} from 'vue-property-decorator'

@Component
export default class DashBoard extends Vue {
  @Prop({
    type: String,
    default: '更多卡片开发中'
  })
  public title: string
}
</script>

<style scoped>
.content {
  height: 300px;
  width: 100%;
  background: white;
}
</style>
