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

    // BUG: 以下两种方式均错，第一种不能初始化，第二种必须初始化时不能为 undefined 或 null
    // public treeNode!: OrgTreeItem
    // public treeNode: OrgTreeItem = {}
    public treeNode: OrgTreeItem = {
      id: '000001', isParent: true, name: '城市拓展部',
      description: '', owner: '1', pid: '000', children: [],
    }

    public created() {
      this.setOrgList().then()
    }

    public onTreeSelChange(treeSel: OrgTreeItem[]) {
      this.treeNode = treeSel[0]
    }
  }
</script>

<style scoped>
</style>
