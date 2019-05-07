<template>
  <v-container>
    <v-layout>
      <v-flex xs4>
        <product-tree></product-tree>
      </v-flex>
      <v-flex xs4>
        <tree-node></tree-node>
      </v-flex>
      <v-flex xs4>
        <node-info></node-info>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  import ProductTree from '@/components/product-tree.vue'
  import TreeNode from './tree-node.vue'
  import NodeInfo from './node-info.vue';

  @Component({
      name: 'AuthManage',
      components: {
        ProductTree,
        TreeNode,
        NodeInfo,
      },
  })
  export default class AuthManage extends Vue {
  }
</script>

<style scoped>
</style>
