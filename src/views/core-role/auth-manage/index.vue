<template>
  <v-container class="ma-0 pa-0">
    <v-layout>
      <v-flex xs4>
        <product-tree
          :treeList="navTree"
        ></product-tree>
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
    public created() {
      console.log(this.navTree)
    }
  }
</script>

<style scoped>
</style>
