<template>
  <v-container fluid class="ma-0 pa-0">
    <v-layout row wrap>
      <v-flex xs12>
        <org-header></org-header>
      </v-flex>
      <v-flex xs12 class="mt-4">
        <org-content></org-content>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  import OrgHeader from './org-header.vue'
  import OrgContent from './org-content.vue'

  // import {namespace} from 'vuex-class'
  // const Nav = namespace('nav')

  @Component({
    name: 'OrgContainer',
    components: {
      OrgHeader,
      OrgContent,
    },
  })
  export default class OrgContainer extends Vue {
    // @Prop() public value!: boolean
    // @User.State('typeList') public userTypeList!: UserTypeItem[]
  }
</script>

<style scoped>
</style>
