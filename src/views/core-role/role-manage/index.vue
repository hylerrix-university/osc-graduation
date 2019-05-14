<template>
  <v-card>
    <v-card-title flat>
      <v-layout>
        <v-flex xs3>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="搜索"
            single-line
            hide-details
          ></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
        <v-btn @click="editItem()">新增角色</v-btn>
      </v-layout>
    </v-card-title>
    <edit-dialog
      v-model="dialog"
      :editedIndex="editedIndex"
      :item="editedItem"
      @close-dialog="onDialogClose"
    ></edit-dialog>
    <v-data-table
      :headers="headers"
      :items="navList"
      :search="search"
      class="elevation-1"
      disable-initial-sort
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.code }}</td>
        <td>{{ props.item.name }}</td>
        <td>
          <v-icon small class="mr-2" @click="editItem(props.item)">
            edit
          </v-icon>
          <v-icon small @click="deleteItem(props.item)">
            delete
          </v-icon>
        </td>
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          您搜索的 "{{ search }}" 没有匹配到相关结果
        </v-alert>
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
    import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
    import EditDialog from './edit-dialog.vue'

    import { RoleItem } from '@/model/role'
    import { namespace } from 'vuex-class'
    const Role = namespace('role')

    @Component({
        name: 'RoleManage',
        components: {
          EditDialog,
        },
    })
    export default class RoleManage extends Vue {
      @Role.State('list') public navList!: RoleItem[]
      public dialog: boolean = false
      public editedIndex: number = -1
      public editedItem: any = {}
      public search: string = ''
      public headers = [
        { text: '权限编号', sortable: true, value: 'code' },
        { text: '权限名称', sortable: true, value: 'name' },
        { text: '节点操作', sortable: false, value: 'code' },
      ]

      public onDialogClose() {
        this.editedIndex = -1
      }

      public addItem() {
        this.editedItem = {}
        this.editedIndex = -1
        this.dialog = true
      }

      public editItem(editedItem: any) {
        this.editedIndex = this.navList.indexOf(editedItem)
        this.editedItem = editedItem
        this.dialog = true
      }

      public deleteItem() {
        console.log('delete')
      }
    }
</script>

<style scoped>
</style>
