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
    // BUG(TS 初始化)：这样报错 public treeNode!: ProductTreeItem
    // BUG(组件传参)：必须初始化 {} 子组件才能跟随 prop 改变
    // 因此，先手动初始化为通用页面
    public treeNode: ProductTreeItem = {
      id: '000000', isParent: true, path: '/',
      name: '通用页面', icon: 'dashboard', status: 'CODING',
      description: '', pid: '000', children: [],
    }
    // BUG(组件传参)：必须初始化 {} 子组件才能跟随 prop 改变
    // 因此，先手动初始化为仪表盘
    public nodeInfo: ProductTreeItem = this.treeNode

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
