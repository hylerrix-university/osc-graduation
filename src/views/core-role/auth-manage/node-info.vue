<template>
  <div>
    {{ nodeInfo }}
  </div>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  import { ProductTreeItem } from '@/model/common/tree.ts'

  @Component({
    name: 'NodeInfo',
    components: {},
  })
  export default class NodeInfo extends Vue {
    @Prop() public nodeInfo!: ProductTreeItem
  }
</script>

<style scoped>
</style>
