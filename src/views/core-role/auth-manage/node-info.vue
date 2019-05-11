<template>
  <v-card>
    <v-card-text>
      {{ nodeInfo.name }}
    </v-card-text>
    <v-data-table
      :headers="headers"
      :items="nodeAuthList"
      no-data-text="该树节点暂无子节点"
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.group }}</td>
        <td>{{ props.item.path }}</td>
        <td>{{ props.item.type }}</td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  import { getNodeAuthList } from '@/api/product-tree.ts'
  import { ProductTreeItem, NodeAuthItem } from '@/model/common/tree.ts'

  @Component({
    name: 'NodeInfo',
    components: {},
  })
  export default class NodeInfo extends Vue {
    @Prop() public nodeInfo!: ProductTreeItem
    public headers: any[] = [
      { text: '权限组名', sortable: true, value: 'group' },
      { text: '接口路径', sortable: true, value: 'path' },
      { text: '操作方式', sortable: true, value: 'type' },
    ]
    public nodeAuthList: NodeAuthItem[] = []

    @Watch('nodeInfo')
    public async onNodeInfoChange() {
      const { data } = await getNodeAuthList()
      this.nodeAuthList = data
    }
  }
</script>

<style scoped>
</style>
