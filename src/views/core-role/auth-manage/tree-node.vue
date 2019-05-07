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

  import { ProductTreeItem } from '@/model/common/tree.ts'

  @Component({
    name: 'TreeNode',
    components: {},
  })
  export default class TreeNode extends Vue {
    @Prop({
      // BUG：必须手动编写 default 才能刚加载时不报错说操作的是 undefined
      default: () => {
        return {
          id: '000000001', isParent: false, path: '/',
          name: '仪表盘', icon: 'dashboard', description: '',
          pid: '000', children: [],
        }
      },
    }) public treeNode!: ProductTreeItem
    public headers: any[] = [
      { text: '节点名称', sortable: true, value: 'name' },
      { text: '节点路径', sortable: true, value: 'path' },
      { text: '节点编号', sortable: true, value: 'id' },
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
