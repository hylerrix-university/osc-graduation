<template>
  <v-container fluid class="ma-0 pa-0">
    <v-layout row wrap>
      <v-flex xs12>
        <org-header
          :treeNode="treeNode"
        ></org-header>
      </v-flex>
      <v-flex xs12 class="mt-4">
        <org-content
          :treeNode="treeNode"
        ></org-content>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  import OrgHeader from './org-header.vue'
  import OrgContent from './org-content.vue'

  import { OrgTreeItem } from '@/model/org'

  @Component({
    name: 'OrgContainer',
    components: {
      OrgHeader,
      OrgContent,
    },
  })
  export default class OrgContainer extends Vue {
    @Prop() public treeNode!: OrgTreeItem
    // @User.State('typeList') public userTypeList!: UserTypeItem[]
  }
</script>

<style scoped>
</style>
