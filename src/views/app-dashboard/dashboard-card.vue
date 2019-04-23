<template>
  <v-card flat class="text-xs-center ma-3">
    <v-card-title class="white--text success">
      默认标题嗷
    </v-card-title>
    <div class="slot">
      <slot></slot>
    </div>
    <!-- <v-card-actions>
      <v-btn flat color="grey">
        <v-icon small left>message</v-icon>
        <span>操作</span>
      </v-btn>
    </v-card-actions> -->
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    name: 'DashboardCard',
    components: {},
  })
  export default class DashboardCard extends Vue {
  }
</script>

<style scoped>
.slot {
  height: 200px;
  width: 100%;
}
</style>
