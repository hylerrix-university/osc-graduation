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
              <v-text-field v-model="editedItem.id" label="部门编号"></v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field v-model="editedItem.name" label="部门名称"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-autocomplete
                v-model="ownersNameList"
                :items="adminNameList"
                chips
                color="blue-grey lighten-2"
                label="负责人"
                multiple
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
              {{ ownersNameList }}
            </v-flex>
            <v-flex xs12>
              <v-textarea
                v-model="editedItem.description"
                label="部门简介"
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

  import { OrgTreeItem } from '@/model/org'
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
      id: '', isParent: false, name: '',
      description: '', owners: '', pid: '', children: [],
    }
    public editedItem: any = this.defaultItem
    public adminNameList: string[] = []
    public ownersNameList: string[] = []

    public created() {
      this.adminNameList = this.adminList.map((admin) => admin.username)
    }

    get title() {
      return this.editedIndex === -1 ? '添加部门' : '编辑部门'
    }

    @Watch('item')
    public onItemChange() {
      // prop 的 item 为空时，editedItem 重置为默认值
      if (!this.item) { this.editedItem = Object.assign({}, this.defaultItem) }
      this.editedItem = Object.assign({}, this.item)
    }

    @Watch('ownersNameList')
    public onOwnersNameListChange() {
      console.log(this.ownersNameList)
    }

    public remove(item: any) {
      this.adminNameList.splice(this.adminNameList.indexOf(item), 1)
      this.adminNameList = [...this.adminNameList]
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
