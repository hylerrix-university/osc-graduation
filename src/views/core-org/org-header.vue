<template>
  <v-card>
    Card-Header
  </v-card>
</template>

<script lang='ts'>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  // import {namespace} from 'vuex-class'
  // const Nav = namespace('nav')

  @Component({
    name: 'OrgHeader',
    components: {},
  })
  export default class OrgHeader extends Vue {
    // @Prop() public value!: boolean
    // @User.State('typeList') public userTypeList!: UserTypeItem[]
  }
</script>

<style scoped>
</style>
