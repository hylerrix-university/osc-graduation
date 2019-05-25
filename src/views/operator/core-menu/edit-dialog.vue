<template>
  <v-dialog
    v-model="value"
    persistent
    width="500"
  >
    <v-card>
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <!-- 弹出框内容 -->
          </v-layout>
        </v-container>
      </v-card-text>
      <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 md6>
              <v-text-field v-model="editedItem.code" label="菜单编号"></v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field v-model="editedItem.name" label="菜单名称"></v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field v-model="editedItem.path" label="菜单路径"></v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field v-model="editedItem.pid" label="父节点"></v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field v-model="editedItem.isParent" label="是否有子节点"></v-text-field>
            </v-flex>
            <v-flex xs12 md12>
              <v-text-field v-model="editedItem.status" label="菜单状态"></v-text-field>
            </v-flex>
            <v-flex xs12 md12>
              <v-text-field v-model="editedItem.remark" label="菜单备注"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="close">返回</v-btn>
        <v-btn color="blue darken-1" flat @click="save">保存</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  @Component({
    name: 'EditDialog',
    components: {},
  })
  export default class EditDialog extends Vue {
    @Prop() public value!: boolean
    @Prop() public item!: any
    @Prop() public editedIndex!: number
    // 重构: 希望不用手动赋默认值
    public defaultItem: any = {}
    public editedItem: any = this.defaultItem

    get title() {
      return this.editedIndex === -1 ? '添加导航' : '编辑导航'
    }

    @Watch('item')
    public onItemChange() {
      // prop 的 item 为空时，editedItem 重置为默认值
      if (!this.item) { this.editedItem = Object.assign({}, this.defaultItem) }
      this.editedItem = Object.assign({}, this.item)
    }

    public save() {
      this.$emit('save-dialog', this.editedItem)
    }

    public close() {
      this.$emit('input', false)
    }
  }
</script>

<style scoped>
</style>
