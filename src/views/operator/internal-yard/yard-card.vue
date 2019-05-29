<template>
  <v-card>
    <!-- {{ yardInfo }} -->
    <v-card-title primary-title>
      场地名称：{{ yard.name }}
    </v-card-title>
    <v-card-text>
      <p>场地地址：{{ yard.position }}</p>
      <p>联系方式：{{ yard.contact }}</p>
      <p>场地状态：{{ yard.status ? '使用中' : '弃用中' }}</p>
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
