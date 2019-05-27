<template>
  <v-autocomplete
    v-model="selectedAdmins"
    :items="adminList"
    chips
    color="blue-grey lighten-2"
    label="相关人员"
    multiple
    return-object
  >
    {{ relatedItem }}
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
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  import { AdminItem } from '@/model/admin'
  import { namespace } from 'vuex-class'
  const Admin = namespace('admin')

  @Component({
    name: 'MutiSelect',
    components: {},
  })
  export default class MutiSelect extends Vue {
    @Prop() public relatedItem!: any
    @Admin.State('list') public adminList!: AdminItem[]
    public selectedAdmins: AdminItem[] = []
    public loading = {
      saveBtn: false,
    }

    @Watch('relatedItem')
    public onRelatedItemChange() {
      this.selectedAdmins = this.relatedItem.admins
    }

    // 每次选择内容改动都让父组件知道
    @Watch('selectedAdmins')
    public onSelectedAdminsChange() {
      this.$emit('on-selected-change', this.selectedAdmins)
    }

    public remove(item: any) {
      this.selectedAdmins.splice(this.selectedAdmins.indexOf(item), 1)
      this.selectedAdmins = [ ...this.selectedAdmins ]
    }
  }
</script>

<style scoped>
</style>
