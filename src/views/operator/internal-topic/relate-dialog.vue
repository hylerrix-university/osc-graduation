<template>
  <v-dialog
    v-model="value"
    persistent
    width="700"
  >
    <v-card>
      <v-card-title>
        <span class="headline">分配人员</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <!-- 弹出框内容 -->
            <v-flex xs12>
              <person-select
                @on-selected-change="onSelectedChange"
                :relatedItem="editedItem"
                :multiple="false"
              ></person-select>
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
  import PersonSelect from './person-select.vue'
 
  import { LectorItem } from '@/model/lector'

  @Component({
    name: 'RelateDialog',
    components: {
      PersonSelect,
    },
  })
  export default class RelateDialog extends Vue {
    @Prop() public value!: boolean
    @Prop() public item!: any
    @Prop() public editedIndex!: number
    public selectedLector!: LectorItem
    public editedItem: any = {}

    @Watch('item')
    public onItemChage() {
      this.editedItem = Object.assign({}, this.item)
    }

    public onSelectedChange(selectedLector: LectorItem) {
      this.selectedLector = selectedLector
    }

    public save() {
      this.$emit('save-dialog', this.editedItem.id, this.selectedLector.id)
    }

    public close() {
      this.$emit('input', false)
    }
  }
</script>

<style scoped>
</style>
