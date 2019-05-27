<template>
    <v-dialog v-model="value" lazy persistent  max-width="1000px">
        <v-card>
          <v-card-title>
            <span class="headline">给角色分配人员</span>
          </v-card-title>

          <v-container>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field disabled v-model="editedItem.name" label="角色名"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <!-- {{ adminList }} -->
                <v-autocomplete
                  v-model="selectedAdmins"
                  :items="adminList"
                  chips
                  color="blue-grey lighten-2"
                  label="相关人员"
                  multiple
                  return-object
                >
                  <template v-slot:no-data>
                    <v-list-tile>
                      <v-list-tile-title>
                        匹配不到相关人员
                      </v-list-tile-title>
                    </v-list-tile>
                  </template>
                  <template v-slot:selection="data">
                    <v-chip close @input="remove(data.item)">
                      {{ data.item.username }}
                    </v-chip>
                  </template>
                  <template v-slot:item="data">
                    <v-list-tile-content v-text="data.item.username"></v-list-tile-content>
                  </template>
                </v-autocomplete>
              </v-flex>
            </v-layout>
          </v-container>

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
    @Role.State('list') public roleList!: RoleItem[]
    @Admin.State('list') public adminList!: AdminItem[]
    public selectedAdmins: AdminItem[] = []
    public loading = {
      saveBtn: false,
    }

    @Watch('editedItem')
    public onEditedItemChange() {
      this.selectedAdmins = this.editedItem.admins
    }

    public async save() {
      const selectedAdminIds = this.selectedAdmins.map((admin) => admin.id)
      this.$emit('save-dialog', this.editedItem.id, selectedAdminIds)
    }

    public remove(item: any) {
      this.selectedAdmins.splice(this.selectedAdmins.indexOf(item), 1)
      this.selectedAdmins = [ ...this.selectedAdmins ]
    }

    public close() {
      this.$emit('input', false)
    }
  }
</script>

<style scoped>

</style>
