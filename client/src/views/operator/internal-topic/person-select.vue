<template>
  <v-autocomplete
    v-model="selectedLectors"
    :items="lectorList"
    chips
    color="blue-grey lighten-2"
    label="相关人员"
    :multiple="multiple"
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
</template>

<script lang='ts'>
  // 重构：这个成员选择只能选择 lector 列表的成员，无法和社区成员共用组件，届时合并在一起
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  import { LectorItem } from '@/model/lector'
  import { namespace } from 'vuex-class'
  const Lector = namespace('lector')

  @Component({
    name: 'PersonSelect',
    components: {},
  })
  export default class PersonSelect extends Vue {
    @Prop() public relatedItem!: any
    @Prop() public multiple!: boolean
    @Lector.State('list') public lectorList!: LectorItem[]
    @Lector.Action public setLectorList!: any
    public selectedLectors: LectorItem[] = []
    public loading = {
      saveBtn: false,
    }

    public created() {
      this.setLectorList()
    }

    @Watch('relatedItem')
    public onRelatedItemChange() {
      this.selectedLectors = this.relatedItem.users
    }

    // 每次选择内容改动都让父组件知道
    @Watch('selectedLectors')
    public onSelectedLectorsChange() {
      this.$emit('on-selected-change', this.selectedLectors)
    }

    public remove(item: any) {
      this.selectedLectors.splice(this.selectedLectors.indexOf(item), 1)
      this.selectedLectors = [ ...this.selectedLectors ]
    }
  }
</script>

<style scoped>
</style>
