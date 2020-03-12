<template>
  <v-card v-if="!loading.treeList" class="tree-card">
    <v-text-field
      v-model="search"
      label="筛选产品树"
      solo
      class="pt-3 px-3"
      hint="注：暂不支持拼音搜索"
      persistent-hint
      clear-icon="mdi-close-circle-outline"
    ></v-text-field>
    <v-card-text class="pt-0">
      <v-treeview
        class="app-tree"
        :items="treeList"
        :search="search"
        activatable
        :active.sync="treeSel"
        return-object
        item-text="name"
        hoverable
      ></v-treeview>
    </v-card-text>
  </v-card>
  <app-loading v-else style="height: 600px"></app-loading>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  import { getProductTree } from '@/api/product-tree.ts'
  import AppLoading from '@/components/app-loading.vue'

  @Component({
    name: 'ProductTree',
    components: { AppLoading },
  })
  export default class ProductTree extends Vue {
    @Prop({
      required: true,
    }) public treeList!: any
    public loading = {
      treeList: false,
    }
    public treeSel: any = []
    public search: string = ''

    public created() {
      // 待做：默认选择第一个
    }

    // @Watch('treeList')
    // onTreeListChange() {
    //   this.lazyTreeList = this.treeList
    // }

    @Watch('treeSel')
    public onTreeSelChange() {
      this.$emit('on-tree-sel-change', this.treeSel)
    }
  }
</script>

<style scoped>
  .tree-card {
    min-height: 81vh;
    max-height: 81vh;
    overflow-y: scroll;
  }
</style>

<style scoped>
</style>