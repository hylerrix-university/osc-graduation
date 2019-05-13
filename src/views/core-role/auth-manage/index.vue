<template>
  <v-container class="ma-0 pa-0" fluid>
    <v-layout>
      <v-flex xs3>
        <product-tree
          :treeList="navTree"
          @on-tree-sel-change="onTreeSelChange"
        ></product-tree>
      </v-flex>
      <template v-if="!treeNode">
        <v-flex xs9 class="mx-2">
          请选择产品节点
        </v-flex>
      </template>
      <template v-if="treeNode">
        <v-flex xs5 class="mx-2">
          <tree-node
            :treeNode="treeNode"
            @on-selected-node-change="onSelectedNodeChange"
          ></tree-node>
        </v-flex>
        <v-flex xs4>
          <node-info
            :nodeInfo="nodeInfo"
          ></node-info>
        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  import ProductTree from '@/components/product-tree.vue'
  import TreeNode from './tree-node.vue'
  import NodeInfo from './node-info.vue'
  
  import { ProductTreeItem } from '@/model/nav.ts'
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
    public treeNode: any = {}
    public nodeInfo: any = {}

    public created() {
      this.treeNode = this.navTree[0]
      if (this.treeNode.children.length) {
        this.nodeInfo = this.treeNode.children[0]
      }
    }

    public onTreeSelChange(treeSel: ProductTreeItem[]) {
      this.treeNode = treeSel[0]
    }

    public onSelectedNodeChange(nodeSel: ProductTreeItem) {
      this.nodeInfo = nodeSel
    }
  }
</script>

<style scoped>
</style>
