<template>
  <v-card>
    <v-card-text>
      当前节点：{{ treeNode.name }}
    </v-card-text>
    {{ treeNode }} 
    <v-data-table
      :headers="headers"
      :items="treeNode.children"
      no-data-text="该树节点暂无子节点"
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.path }}</td>
        <td>{{ props.item.id }}</td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  import { ProductTreeItem } from '@/model/common/tree.ts'

  @Component({
    name: 'TreeNode',
    components: {},
  })
  export default class TreeNode extends Vue {
    @Prop() public treeNode!: ProductTreeItem
    public headers: any[] = [
      { text: '节点名称', sortable: false, value: 'name' },
      { text: '节点路径', sortable: false, value: 'path' },
      { text: '节点编号', sortable: false, value: 'id' },
    ]
    // public nodeList: any[] = []

    @Watch('treeNode')
    public onTreeNodeChange() {
      console.log(this.treeNode)
    }
  }
</script>

<style scoped>
</style>
