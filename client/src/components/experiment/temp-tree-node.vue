<template>
  <v-card>
    <v-card-text>
      {{ treeNode.name }}
    </v-card-text>
    <v-data-table
      :headers="headers"
      :items="treeNode.children"
      no-data-text="该树节点暂无子节点"
      hide-actions
    >
      <template v-slot:items="props">
        <tr @click="selectNode(props)">
          <td>{{ props.item.name }}</td>
          <td>{{ props.item.path }}</td>
          <td>{{ props.item.id }}</td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  import { ProductTreeItem } from '@/model/nav.ts'

  @Component({
    name: 'TreeNode',
    components: {},
  })
  export default class TreeNode extends Vue {
    @Prop() public treeNode!: ProductTreeItem
    public headers: any[] = [
      { text: '节点名称', sortable: true, value: 'name' },
      { text: '节点路径', sortable: true, value: 'path' },
      { text: '节点编号', sortable: true, value: 'code' },
    ]
    // public nodeList: [] = []

    public selectNode(tdNode: any) {
      this.$emit('on-selected-node-change', tdNode.item)
    }

    @Watch('treeNode')
    public onTreeNodeChange() {
      const children = this.treeNode.children.slice()
      this.$emit('on-selected-node-change', children.shift())
    }
  }
</script>

<style scoped>
</style>
