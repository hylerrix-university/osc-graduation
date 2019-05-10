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
        <org-container></org-container>
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
    @Org.State('list') public orgTree!: OrgTreeItem[]
    @Org.Action public setOrgList!: any
    public treeNode!: OrgTreeItem
    public nodeInfo: OrgTreeItem = this.treeNode

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
