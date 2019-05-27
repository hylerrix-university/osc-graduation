<template>
  <v-dialog
    v-model="value"
    persistent
    width="900"
  >
    <v-card>
      <v-card-title>
        <span class="headline">给角色分配导航</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <!-- 弹出框内容 -->
            <v-flex xs12>
              <v-data-table
                v-model="selectedMenus"
                :headers="headers"
                :items="navList"
                class="elevation-1"
                hide-actions
                select-all
                disable-initial-sort
              >
                <template v-slot:items="props">
                  <td>
                    <v-checkbox
                      v-model="props.selected"
                      primary
                      hide-details
                    ></v-checkbox>
                  </td>
                  <td>{{ props.item.code }}</td>
                  <td>{{ props.item.name }}</td>
                  <td>{{ props.item.path }}</td>
                  <td>{{ props.item.status ? '开发中' : '设计中'}}</td>
                </template>
              </v-data-table>
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

  import { NavItem } from '@/model/nav'
  import { namespace } from 'vuex-class'
  const Nav = namespace('nav')

  @Component({
    name: 'EditNav',
    components: {},
  })
  export default class EditNav extends Vue {
    @Nav.State('allList') public navList!: NavItem[]
    @Prop() public value!: boolean
    @Prop() public editedItem!: any
    @Prop() public editedIndex!: number
    public selectedMenus: NavItem[] = []
    public headers = [
      { text: '节点编号', sortable: true, value: 'code' },
      { text: '节点名称', sortable: true, value: 'name' },
      { text: '节点路径', sortable: true, value: 'path' },
      { text: '节点状态', sortable: false, value: 'status' },
    ]

    @Watch('editedItem')
    public onEditedItemChange() {
      this.selectedMenus = this.editedItem.menus
    }

    public save() {
      const menuIds = this.selectedMenus.map((menu: NavItem) => menu.id)
      this.$emit('save-dialog', this.editedItem.id, menuIds)
    }

    public close() {
      this.$emit('input', false)
    }
  }
</script>

<style scoped>
</style>
