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
              <v-text-field v-model="editedItem.name" label="主题名称"></v-text-field>
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
    name: 'EditDialog',
    components: {
      PersonSelect,
    },
  })
  export default class EditDialog extends Vue {
    @Prop() public value!: boolean
    @Prop() public item!: any
    @Prop() public editedIndex!: number
    public editedItem: any = {}
    public selectedLectors: LectorItem[] = []

    get title() {
      return this.editedIndex === -1 ? '添加主题' : '编辑主题'
    }

    @Watch('item')
    public onItemChange() {
      if (!this.item) { this.editedItem = Object.assign({}, {}) }
      this.editedItem = Object.assign({}, this.item)
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
