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
              <v-text-field
                v-model="editedItem.code"
                label="组织编号">
              </v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field
                v-model="editedItem.name"
                label="组织名称">
              </v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-autocomplete
                v-model="editedItem.owner"
                :items="adminNameList"
                chips
                color="blue-grey lighten-2"
                label="负责人"
              >
                <template v-slot:no-data>
                  <v-list-tile>
                    <v-list-tile-title>
                      匹配不到相关人员
                    </v-list-tile-title>
                  </v-list-tile>
                </template>
                <template v-slot:selection="data">
                  <username-tooltip
                    :username="data.item">
                  </username-tooltip>
                </template>
                <template v-slot:item="data">
                  <v-list-tile-content v-text="data.item"></v-list-tile-content>
                </template>
              </v-autocomplete>
            </v-flex>
            <v-flex xs12>
              <v-textarea
                v-model="editedItem.remark"
                label="组织简介"
                counter
                maxlength="120"
                class="pa-0 ma-0"
              ></v-textarea>
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
  import UsernameTooltip from '@/components/username-tooltip.vue'

  import { OrgItem } from '@/model/org'
  import { AdminItem } from '@/model/admin'
  import { namespace } from 'vuex-class'
  const Admin = namespace('admin')

  @Component({
    name: 'EditDialog',
    components: {
      UsernameTooltip,
    },
  })
  export default class EditDialog extends Vue {
    @Prop() public value!: boolean
    @Prop() public item!: any
    @Prop() public editedIndex!: number
    @Admin.State('list') public adminList!: AdminItem[]
    // 重构: 希望不用手动赋默认值
    public defaultItem: any = {
      id: '', code: '', isParent: 0, name: '',
      remark: '', owner: '', pid: '',
    }
    public editedItem: any = this.defaultItem
    public adminNameList: string[] = []
    // public error: any = {
    //   code: { status: false, message: '组织编号必须填写'},
    //   name: { status: false, message: '组织名称必须填写'},
    //   owner: { status: false, message: '负责人必须选择'},
    //   remark: { status: false, message: '组织备注必须选择'},
    // }

    public created() {
      this.adminNameList = this.adminList.map((admin) => admin.username)
    }

    get title() {
      return this.editedIndex === -1 ? '添加组织' : '编辑组织'
    }

    @Watch('item')
    public onItemChange() {
      // prop 的 item 为空时，editedItem 重置为默认值
      if (!this.item) { this.editedItem = Object.assign({}, this.defaultItem) }
      this.editedItem = Object.assign({}, this.item)
    }

    public save() {
      // 重新将 owner 的 name 值改为 id 值
      const owner: any = this.adminList.find((admin) =>  {
        return admin.username === this.editedItem.owner
      })
      this.editedItem.owner = owner ? owner.id : 0
      this.$emit('save-dialog', this.editedItem)
    }

    public close() {
      this.$emit('input', false)
    }

  }
</script>

<style scoped>
</style>
