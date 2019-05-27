<template>
  <v-dialog
    v-model="value"
    persistent
    width="700"
  >
    <v-card>
      <v-card-title>
        <span class="headline">分配人员</span>
        {{ editedItem.id }}
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <!-- 弹出框内容 -->
            <v-flex xs12>
              <muti-select
                @on-selected-change="onSelectedChange"
                :relatedItem="editedItem"
              ></muti-select>
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
  import MutiSelect from '@/components/person/muti-select.vue'
 
  import { AdminItem } from '@/model/admin'

  @Component({
    name: 'RelateDialog',
    components: {
      MutiSelect,
    },
  })
  export default class RelateDialog extends Vue {
    @Prop() public value!: boolean
    @Prop() public editedItem!: any
    @Prop() public editedIndex!: number
    public selectedAdmins: AdminItem[] = []

    public onSelectedChange(selectedAdmins: AdminItem[]) {
      this.selectedAdmins = selectedAdmins
    }

    public save() {
      const selectedAdminIds = this.selectedAdmins.map((admin: AdminItem) => admin.id)
      this.$emit('save-dialog', this.editedItem.id, selectedAdminIds)
    }

    public close() {
      this.$emit('input', false)
    }
  }
</script>

<style scoped>
</style>
