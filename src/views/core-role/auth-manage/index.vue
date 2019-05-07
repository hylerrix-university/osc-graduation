<template>
  <v-container class="ma-0 pa-0" fluid>
    <v-layout>
      <v-flex xs3>
        <product-tree
          :treeList="navTree"
          @on-tree-sel-change="onTreeSelChange"
        ></product-tree>
      </v-flex>
      <v-flex xs6 class="mx-2">
        <tree-node
          :treeNode="treeNode"
        ></tree-node>
      </v-flex>
      <v-flex xs3>
        <node-info></node-info>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  import ProductTree from '@/components/product-tree.vue'
  import TreeNode from './tree-node.vue'
  import NodeInfo from './node-info.vue'
  
  import { ProductTreeItem } from '@/model/common/tree.ts'
  import { namespace } from 'vuex-class'
  const Nav = namespace('nav')

  @Component({
      name: 'AuthManage',
      components: {
        ProductTree,
        TreeNode,
        NodeInfo,
      },
  })
  export default class AuthManage extends Vue {
    @Nav.Getter public navTree!: ProductTreeItem[]
    // BUG：这样报错 public treeNode!: ProductTreeItem
    public treeNode: any

    public created() {
      // 默认点击仪表盘
      this.treeNode = this.navTree[0]
    }

    public onTreeSelChange(treeSel: ProductTreeItem[]) {
      console.log('onTreeSelChange')
      this.treeNode = treeSel[0]
      console.log(this.treeNode)
    }
  }
</script>

<style scoped>
</style>
