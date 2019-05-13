<template>
  <v-card>
    <!-- {{ yardInfo }} -->
    <v-card-title primary-title>
      场地名称：<br/>
      {{ yard.name }}
    </v-card-title>
    <v-card-text>
      场地地址：<br/>
      {{ yard.position }}
    </v-card-text>
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  import { YardItem } from '@/model/yard'

  @Component({
    name: 'YardCard',
    components: {},
  })
  export default class YardCard extends Vue {
    @Prop() public yard!: YardItem
  }
</script>

<style scoped>
</style>
