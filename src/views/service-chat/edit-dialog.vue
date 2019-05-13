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
            
          </v-layout>
        </v-container>
      </v-card-text>

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
      return this.editedIndex === -1 ? '添加群聊' : '编辑群聊'
    }

    @Watch('item')
    public onItemChange() {
      // prop 的 item 为空时，editedItem 重置为默认值
      if (!this.item) { this.editedItem = Object.assign({}, this.defaultItem) }
      this.editedItem = Object.assign({}, this.item)
    }

    public save() {
      this.$emit('close-dialog', this.editedItem)
    }

    public close() {
      this.$emit('input', false)
    }
  }
</script>

<style scoped>
</style>
