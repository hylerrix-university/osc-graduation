<template>
    <v-dialog v-model="value" lazy persistent  max-width="1000px">
        <v-card>
          <v-subheader>
            {{ formTitle }}
          </v-subheader>

          <!-- <v-container>
            <v-layout wrap>
              <v-flex xs12>
                <v-select
                  :items="TypeNameList"
                  v-model="currentTypeName"
                  label="角色"
                ></v-select>
              </v-flex>
              <v-flex xs12>
                <v-autocomplete
                  v-model="currentUsernames"
                  :items="selectableUsernames"
                  chips
                  color="blue-grey lighten-2"
                  label="人员"
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
                    <v-chip
                      :selected="data.selected"
                      close
                      class="chip--select-multi"
                      @input="remove(data.item)"
                    >
                      {{ data.item }}
                    </v-chip>
                  </template>
                  <template v-slot:item="data">
                    <v-list-tile-content v-text="data.item"></v-list-tile-content>
                  </template>
                </v-autocomplete>
              </v-flex>
            </v-layout>
          </v-container> -->

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat @click="close(false)">取消</v-btn>
            <v-btn 
              :loading="loading.saveBtn"
              :disabled="loading.saveBtn"
              color="primary"
              @click="save"
            >
              保存
            </v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  import { AdminItem } from '@/model/admin'
  import { RoleItem } from '@/model/role'
  import { namespace } from 'vuex-class'
  const Admin = namespace('admin')
  const Role = namespace('role')

  @Component({
      name: 'EditAdmin',
      components: {},
  })
  export default class EditAdmin extends Vue {
    @Prop() public value!: boolean
    @Prop() public editedIndex!: number
    @Prop() public editedItem!: RoleItem
    @Role.State('list') public adminList!: AdminItem[]
    public loading = {
      saveBtn: false,
      selectUser: true,
    }
    // filteredUserTypeList: UserTypeItem[] = []
    // currentTypeItem!: UserTypeItem | undefined
    // selectableUsernames: string[] = []
    // currentTypeName: string = ''
    // currentUsernames: string[] = ['']

    public created() {
      // 过滤掉不能编辑的角色
      // this.filteredUserTypeList = this.userTypeList.filter((u) => {
      //   return u.enabled
      // })
      // this.selectableUsernames = this.userList.map((i) => i.username)
    }

    // @Watch('editedItem')
    // onEditedItemChange() {
    //   if (!this.editedItem.masterType) { return }
    //   this.currentTypeItem = this.userTypeList.find((item: UserTypeItem) => {
    //     return item.id === this.editedItem.masterType
    //   })
    //   if (!this.currentTypeItem!.enabled) {
    //     alert('当前角色无法编辑，请联系管理员!')
    //     this.close(false)
    //     return
    //   }
    //   this.currentTypeName = this.currentTypeItem!.description
    //   this.currentUsernames = this.value ? this.editedItem.usernames.split(',') : []
    // }

    public get formTitle() {
      return this.editedIndex === -1 ? '新增角色分配' : '编辑角色分配'
    }
    // get defaultItem() {
    //   return !this.editedItem ? {} : this.editedItem
    // }
    // get TypeNameList() {
    //   return this.filteredUserTypeList.map((i) => i.description)
    // }

    public close() {
      this.$emit('input', false)
    }

    public async save() {
      this.loading.saveBtn = true
      this.$emit('save-dialog')
      // const formData: BatchMasterUserItem = {
      //   id: this.node.id,
      // }
      // try {
      //   const result: any = await batchMasterUser(formData)
      //   this.loading.saveBtn = false
      //   alert(result.msg)
      //   if (result.success) {
      //     this.close(true)
      //   }
      //   return
      // } catch (e) {
      //   alert('请求失败，或您没有操作权限!')
      //   this.loading.saveBtn = false
      //   return
      // }
    }

    // public async delete() {
    //   // await delMasterUserByIds({
    //   //   // 这里只有一个 id，每次只删一个
    //   //   masterIds: this.editedItem.userids,
    //   //   fullname: this.node.fullName,
    //   // })
    //   console.log({
    //     // 这里只有一个 id，每次只删一个
    //     masterIds: this.editedItem.userids,
    //     fullname: this.node.fullName,
    //   })
    // }
    // remove(item: any) {
    //   this.currentUsernames.splice(this.currentUsernames.indexOf(item), 1)
    //   this.currentUsernames = [...this.currentUsernames]
    // }
  }
</script>

<style scoped>

</style>
