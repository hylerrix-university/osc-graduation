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
              <v-text-field v-model="editedItem.username" label="用户名"></v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-select
                v-model="editedItem.status"
                :items="selection.status"
                label="封禁状态"
                item-text="name"
                item-value="value"
                return-object
              ></v-select>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field v-model="editedItem.nickname" label="昵称"></v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-select
                v-model="editedItem.sex"
                :items="selection.sex"
                label="性别"
                item-text="name"
                item-value="value"
                return-object
              ></v-select>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field v-model="editedItem.phone" label="电话"></v-text-field>
            </v-flex>
            <!-- <v-flex xs12 md12>
              <v-text-field v-model="editedItem.avatar" label="头像地址"></v-text-field>
            </v-flex> -->
            <v-flex xs12 md6>
              <v-text-field v-model="editedItem.github" label="Github"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model="editedItem.email" label="邮箱"></v-text-field>
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
    public selection: any = {
      status: [
        { name: '已封', value: 0 },
        { name: '可用', value: 1 },
      ],
      sex: [
        { name: '女', value: 0 },
        { name: '男', value: 1 },
      ],
    }

    get title() {
      return this.editedIndex === -1 ? '添加人员' : '编辑人员'
    }

    @Watch('item')
    public onItemChange() {
      // prop 的 item 为空时，editedItem 重置为默认值
      if (!this.item) { this.editedItem = Object.assign({}, this.defaultItem) }
      this.editedItem = Object.assign({}, this.item)
    }

    public save() {
      this.editedItem.sex = this.editedItem.sex.value
      this.editedItem.status = this.editedItem.status.value
      this.$emit('save-dialog', this.editedItem)
    }

    public close() {
      this.$emit('input', false)
    }
  }
</script>

<style scoped>
</style>
