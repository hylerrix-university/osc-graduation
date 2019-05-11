<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs3>
        <product-tree
          :treeList="orgTree"
          @on-tree-sel-change="onTreeSelChange"
        ></product-tree>
      </v-flex>
      <v-flex xs9 class="pl-4">
        <org-container
          v-if="treeNode"
          :treeNode="treeNode"
        ></org-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang='ts'>
  import { Component, Vue } from 'vue-property-decorator'
  import ProductTree from '@/components/product-tree.vue'
  import OrgContainer from './org-container.vue'

  import { OrgTreeItem } from '@/model/org'
  import { namespace } from 'vuex-class'
  const Org = namespace('org')

  @Component({
    name: 'CoreOrg',
    components: {
      ProductTree,
      OrgContainer,
    },
  })
  export default class CoreOrg extends Vue {
    @Org.Getter public orgTree!: OrgTreeItem[]
    @Org.Action public setOrgList!: any

    // BUG: 以下两种方式均错，必须用 any 解决
    // * 第一种不初始化视图没数据
    // * 第二种初始化时不能为 {}、undefined 或 null，只能写死
    // public treeNode!: OrgTreeItem
    // public treeNode: OrgTreeItem = {
    //   id: '000001', isParent: true, name: '城市拓展部',
    //   description: '', owner: '1', pid: '000', children: [],
    // }
    public treeNode: any = {}

    public created() {
      this.setOrgList().then(() => {
        this.treeNode = this.orgTree[0]
      })
    }

    public onTreeSelChange(treeSel: OrgTreeItem[]) {
      this.treeNode = treeSel[0]
    }
  }
</script>

<style scoped>
</style>
