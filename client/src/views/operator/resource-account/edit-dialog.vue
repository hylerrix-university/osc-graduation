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
            <v-flex xs12>
              <v-select
                v-model="editedItem.platform"
                :items="platformList"
                label="所属平台"
                item-text="type"
                item-value="id"
                return-object
              ></v-select>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field v-model="editedItem.account" label="账号"></v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-select
                v-model="editedItem.status"
                :items="selection.status"
                label="账号状态"
                item-text="name"
                item-value="value"
                return-object
              ></v-select>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model="editedItem.password" label="密码"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model="editedItem.remark" label="备注"></v-text-field>
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

  import { PlatformItem } from '@/model/platform'
  import { namespace } from 'vuex-class'
  const Platform = namespace('platform')

  @Component({
    name: 'EditDialog',
    components: {},
  })
  export default class EditDialog extends Vue {
    @Prop() public value!: boolean
    @Prop() public item!: any
    @Prop() public editedIndex!: number
    @Platform.State('list') public platformList!: PlatformItem[]
    @Platform.Action public setPlatformList!: any
    public editedItem: any = {}
    public selection: any = {
      status: [
        { name: '待定中', value: 0 },
        { name: '使用中', value: 1 },
      ],
    }

    @Watch('item')
    public onItemChange() {
      if (!this.item) { this.editedItem = Object.assign({}, {}) }
      this.editedItem = Object.assign({}, this.item)
    }

    public created() {
      this.setPlatformList()
    }

    get title() {
      return this.editedIndex === -1 ? '添加账号' : '编辑账号'
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
