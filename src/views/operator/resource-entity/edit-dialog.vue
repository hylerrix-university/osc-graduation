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
            <v-flex xs12 md6>
              <v-text-field v-model="editedItem.name" label="物资名称"></v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <!-- 数字选择 -->
              <v-text-field v-model="editedItem.count" label="物资数量"></v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-select
                v-model="editedItem.unit"
                :items="selection.unit"
                label="赞助单位"
                item-text="name"
                item-value="value"
                return-object
              ></v-select>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field v-model="editedItem.time" label="赞助时间"></v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <!-- 单选 -->
              <person-select
                @on-selected-change="onSelectedChange"
                :relatedItem="editedItem"
                :multiple="false"
              ></person-select>
            </v-flex>
            <v-flex xs12 md6>
              <v-select
                v-model="editedItem.status"
                :items="selection.status"
                label="物资状态"
                item-text="name"
                item-value="value"
                return-object
              ></v-select>
            </v-flex>
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
  import PersonSelect from '@/components/person/person-select.vue'

  @Component({
    name: 'EditDialog',
    components: {
      PersonSelect,
    },
  })
  export default class EditDialog extends Vue {
    @Prop() public value!: boolean
    @Prop() public item!: any
    @Prop() public editedIndex!: number
    // 重构: 希望不用手动赋默认值
    public defaultItem: any = {}
    public editedItem: any = this.defaultItem
    public selection: any = {
      status: [
        { name: '未签收', value: 0 },
        { name: '库存中', value: 1 },
        { name: '已使用', value: 2 },
        { name: '其它', value: 3 },
      ],
      unit: [
        { name: 'FCC 西安社区', value: 0 },
        { name: 'FCC 成都社区', value: 1 },
        { name: 'FCC 中文社区', value: 2 },
        { name: '其它', value: 3 },
      ],
    }

    get title() {
      return this.editedIndex === -1 ? '添加物资' : '编辑物资'
    }

    @Watch('item')
    public onItemChange() {
      // prop 的 item 为空时，editedItem 重置为默认值
      if (!this.item) { this.editedItem = Object.assign({}, this.defaultItem) }
      this.editedItem = Object.assign({}, this.item)
    }

    public onSelectedChange(item: any) {
      // 人员选择改变时
      this.editedItem.adminId = item.id
      console.log(item)
    }

    public save() {
      console.log(this.editedItem)
      // this.$emit('save-dialog', this.editedItem)
    }

    public close() {
      this.$emit('input', false)
    }
  }
</script>

<style scoped>
</style>
